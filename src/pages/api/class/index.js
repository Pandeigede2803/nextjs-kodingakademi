import { Class, Student } from "models";
import { Op } from "sequelize";

async function GET(req, res) {
  const { className, studentName } = req.query;

  const classes = await Class.findAll({
    where: {
      ...(className && {
        className: {
          [Op.like]: `%${className}%`,
        },
      }),
    },
    include: [
      {
        model: Student,
        as: "students",
        attributes: ["id", "name", "gender", "address"],
        ...(studentName && {
          where: {
            ...(studentName && {
              name: {
                [Op.like]: `%${studentName}%`,
              },
            }),
          },
        }),
      },
    ],
  });

  res.status(200).json({
    status: "success",
    data: classes,
  });
}

async function POST(req, res) {
  const { className } = req.body;

  const classData = await Class.create({
    className,
  });

  res.status(201).json({
    status: "success",
    data: classData,
  });
}

async function PUT(req, res) {
  const { id, className } = req.body;

  await Class.update(
    {
      className,
    },
    {
      where: { id },
    }
  );

  res.status(200).json({
    status: "success",
  });
}

async function DELETE(req, res) {
  const { id } = req.body;

  await Class.destroy({
    where: { id },
  });

  res.status(200).json({
    status: "success",
  });
}

async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "POST" && req.method !== "PUT" && req.method !== "DELETE") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  if (req.method == "GET") return GET(req, res);
  if (req.method == "POST") return POST(req, res);
  if (req.method == "PUT") return PUT(req, res);
  if (req.method == "DELETE") return DELETE(req, res);
}

export default handler;
