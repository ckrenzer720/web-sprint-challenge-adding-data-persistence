// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAll() {
  const projects = await db("projects").select(
    "project_id",
    "project_name",
    "project_description",
    db.raw("project_completed = 1 as project_completed")
  );
  return projects;
}

async function addProject(project) {
  const [project_id] = await db("projects").insert(project);
  const newProject = await db("projects")
    .select(
      "project_id",
      "project_name",
      "project_description",
      db.raw("project_completed = 1 as project_completed")
    )
    .where("project_id", project_id)
    .first();
  return newProject;
}

module.exports = { getAll, addProject };
