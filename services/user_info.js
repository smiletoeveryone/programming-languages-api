const db = require('/home/fiftycentsjj/Downloads/nodejs_exercise/programming-languages-api/services/db');
const helper = require('/home/fiftycentsjj/Downloads/nodejs_exercise/programming-languages-api/helper');
const config = require('/home/fiftycentsjj/Downloads/nodejs_exercise/programming-languages-api/config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, login_year, password, password_confirmation, userrank 
    FROM user_info LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}

async function create(user_info){
  const result = await db.query(
    `INSERT INTO user_info 
    (name, login_year, password, password_confirmation,userrank) 
    VALUES 
    (${user_info.name}, ${user_info.login_year}, ${user_info.password}, ${user_info.password_confirmation}, ${user_info.userrank})`
  );

  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = 'Programming language created successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create
}

async function update(id, user_info){
  const result = await db.query(
    `UPDATE user_info 
    SET name="${user_info.name}", login_year=${user_info.login_year}, password=${user_info.password}, password_confirmation=${user_info.password_confirmation}, userrank=${user_info.userrank} 
    WHERE id=${id}` 
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = 'Programming language updated successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
};

async function remove(id){
  const result = await db.query(
    `DELETE FROM user_info WHERE id=${id}`
  );

  let message = 'Error in deleting programming language';

  if (result.affectedRows) {
    message = 'Programming language deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}