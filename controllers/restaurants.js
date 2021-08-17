import pool from '../db/pg.js';

export const getAllRestaurants = async (req, res) => {
    try {
      const { rowCount: total, rows: restaurants } = await pool.query('SELECT * FROM restaurants;');
      res.status(200).json({ total, restaurants });
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  };

  export const getSingleRestaurant = async (req, res) => {
    try {
      const { id } = req.params;
      const { rows, rowCount } = await pool.query('SELECT * FROM restaurants WHERE id=$1;', [id]);
      if (!rowCount) throw new Error(`Post with id of ${id} doesn't exist`);
      res.status(200).json(rows[0]);
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  };

  export const createRestaurant = async (req, res) => {
    try {
      const { name, description } = req.body;
      if (!name || !description)
        throw Error('All fields are required');
      const { rowCount: found } = await pool.query('SELECT * FROM restaurants WHERE name=$1', [name]);
      if (found) throw Error('restaurant already exists');
      const values = [name, description];
      const { rows } = await pool.query(
        'INSERT INTO restaurants(name, description) VALUES($1, $2) RETURNING *',
        values
      );
      res.status(201).json(rows[0]);
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  };