import express from 'express';
import { exec } from 'child_process';

const router = express.Router();

router.post('/generate-divide-test', (req, res) => {

    // const count = req.body.count || 10;

    exec(
      `python3 magix-engine/main.py divide`,
      (error, stdout, stderr) => {

        if (error) {
          console.log(error);
          return res.status(500).json({
            error: 'Python execution failed'
          });
        }

        try {

          const problems = JSON.parse(stdout);

          res.json({
            problems: problems
          });

        } catch (err) {

          console.log(err);

          res.status(500).json({
            error: 'Invalid JSON from Python'
          });
        }
      }
    );
});

export default router;