import { Subject } from "models";
import { Op } from "sequelize";

async function GET(req, res) {
  const { subjectName } = req.query;

  const subjects = await Subject.findAll({
    where: {
      ...(subjectName && {
        subjectName: {
          [Op.like]: `%${subjectName}%`,
        },
      }),
    },
  });

  res.status(200).json({
    status: "success",
    data: subjects,
  });
}

async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Only GET method are allowed" });
    return;
  }

  if (req.method == "GET") return GET(req, res);
}

export default handler;
