import { Student, StudentSubject, Subject, Class } from "models";

async function GET(req, res) {
  const { student_id } = req.query;
  if (!student_id) {
    res.status(400).json({ message: "student_id is required" });
    return;
  }

  const students = await Student.findAll({
    where: {
      id: student_id,
    },
    include: [
      {
        model: Class,
        as: "class",
        attributes: ["className"],
      },
      {
        model: StudentSubject,
        as: "studentsubjects",
        attributes: ["score"],
        include: [
          {
            model: Subject,
            as: "subject",
            attributes: ["subjectName"],
          },
        ],
      },
    ],
  });

  res.status(200).json({
    status: "success",
    data: students,
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
