const { Router } = require("express");
const { v4: uuid } = require("uuid");
const connection = require("./db");

const router = Router();

const decodeId = (bufferArray) => {
  return Buffer.from(bufferArray).toString("hex");
};

const SUCCESS = {
  WORKSPACE_CREATED: (name) => `Workspace ${name} has been created`,
  WORKSPACE_UPDATED: (name) => `Workspace ${name} has been updated`,
  WORKSPACE_DELETED: 'Workspace has been deleted',
}
const ERRORS = {
  SERVER_ERROR: "Error on server",
  ALL_FIELDS_REQUIRED: "Some required fields are missing",
  NOT_FOUND: "Board was not found. Incorrect id",
};

router.get('/workspaces', (req, res) => {
  connection.query('select * from workspace', 
  (err, workspaces) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    const convertedData = workspaces.map(({
      id,
      name,
      description,
      owner_id,
    }) => ({
      id: decodeId(id),
      name,
      description,
      owner_id: decodeId(owner_id),
    }));

    res.status(200).json({
      data: convertedData,
    });
  });
});

router.get('/workspace/:id', (req, res) => {
  const {id} = req.params;
  connection.query(`select * from workspace where id = unhex("${id}")`, 
  (err, [workspace]) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    if (!workspace) {
      res.status(404).json({
        message: ERRORS.NOT_FOUND,
      });
      return;
    }

    res.status(200).json({
      data: {
        ...workspace,
        id: decodeId(workspace.id),
        owner_id: decodeId(workspace.owner_id),
      },
    });
  });
});

router.post('/workspace', (req, res) => {
  const {name, description, owner_id} = req.body;

  if (!(name && description && owner_id)) {
    res.status(400).json({
      message: ERRORS.ALL_FIELDS_REQUIRED,
    });
    return;
  }

  const id = uuid().replaceAll('-', '');

  connection.query(
    `insert into workspace(id,name, description, owner_id) 
    values (
        unhex("${id}"),
        "${name}",
        "${description}",
        unhex("${owner_id}")
      )`,
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: ERRORS.SERVER_ERROR,
        });
        return;
      }

      res.status(201).json({
        message: SUCCESS.WORKSPACE_CREATED(name),
      });
    }
  );
});

router.put('/workspace/:id', (req, res) => {
  const {id} = req.params;

  connection.query(`select * from workspace where id = unhex("${id}")`, 
  (err, [workspace]) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    if (!workspace) {
      res.status(404).json({
        message: ERRORS.NOT_FOUND,
      });
      return;
    }

    const {
      name,
      description,
      owner_id,
    } = {
      ...workspace,
      owner_id: decodeId(workspace.owner_id),
      ...req.body,
    };

    connection.query(
      `update workspace set 
        name = "${name}", 
        description = "${description}",
        owner_id = unhex("${owner_id}")
        where id = unhex("${id}")`,
      (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: ERRORS.SERVER_ERROR,
          });
          return;
        }

        res.status(200).json({
          message: SUCCESS.WORKSPACE_UPDATED(name),
        });
      }
    );
  });
});

router.delete('/workspace/:id', (req, res) => {
  const {id} = req.params;
  connection.query(`delete from workspace where id = unhex("${id}")`, 
  (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    res.status(200).json({
      message: SUCCESS.WORKSPACE_DELETED
    });
  });
});

module.exports = router;