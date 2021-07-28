import pool from '../db/pg.js';

export const getAllRecipes = async (req, res) => {
    try {
      const { rowCount: total, rows: posts } = await pool.query('SELECT * FROM recipes;');
      res.status(200).json({ total, posts });
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  };

  export const getSingleRecipe = async (req, res) => {
    try {
      const { id } = req.params;
      const { rows, rowCount } = await pool.query('SELECT * FROM recipes WHERE id=$1;', [id]);
      if (!rowCount) throw new Error(`Post with id of ${id} doesn't exist`);
      res.status(200).json(rows[0]);
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  };

  export const createRecipe = async (req, res) => {
    try {
      const { name, description } = req.body;
      if (!name || !description)
        throw Error('All fields are required');
      const { rowCount: found } = await pool.query('SELECT * FROM recipes WHERE name=$1', [name]);
      if (found) throw Error('Recipe already exists');
      const values = [name, description];
      const { rows } = await pool.query(
        'INSERT INTO recipes(name, description) VALUES($1, $2) RETURNING *',
        values
      );
      res.status(201).json(rows[0]);
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  };

export const updateRecipe = async (req, res) => {
    try {
      const { id } = req.params;
      const { rowCount: found } = await pool.query('SELECT * FROM recipes WHERE id=$1', [id]);
      if (!found) throw new Error(`Post with id of ${id} doesn't exist`);
      const { name, description } = req.body;
      if (!name || !description)
        throw Error('All fields are required');
      const values = [name, description, id];
      const { rows } = await pool.query(
        'UPDATE recipes SET name=$1, description=$2, WHERE id=$3 RETURNING *',
        values
      );
      res.status(200).json(rows[0]);
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  };

export const deleteRecipe = async (req, res) => {
    try {
      const { id } = req.params;
      const { rowCount: found } = await pool.query('SELECT * FROM recipes WHERE id=$1', [id]);
      if (!found) throw new Error(`Post with id of ${id} doesn't exist`);
      const { rowCount: deleted } = await pool.query('DELETE FROM recipes WHERE id=$1 RETURNING *', [
        id
      ]);
      if (deleted)
        res.status(200).json({ success: true, message: `Post with id of ${id} was deleted` });
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  };