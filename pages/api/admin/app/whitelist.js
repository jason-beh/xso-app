import { getSession } from "next-auth/client";
import nc from "next-connect";
const faker = require("faker");
faker.locale = "en";
const handler = nc();

// @route    GET api/users
// @desc     Get current user
// @access   Private
handler.get(async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).send("unauthenticated");
  }

  const statusOptions = [
    "High School Graduate",
    "College Freshman",
    "College Sophomore",
    "College Junior",
    "College Senior",
  ];
  let objArr = [];
  for (let i = 0; i < 5; i++) {
    let fakeObj = {
      fullName: faker.name.findName(),
      location: faker.address.country(),
      education: {
        school: faker.company.companyName(),
        studentStatus:
          statusOptions[Math.floor(Math.random() * statusOptions.length)],
        universityMajor: faker.name.jobTitle(),
      },
      cohort: "Fall 2020",
      openQuestions: [
        {
          question: "What do you hope to gain from this program?*",
          answer: faker.lorem.sentences(),
        },
        {
          question: "What would you hope to learn from a Xoogler mentor?*",
          answer: faker.lorem.sentences(),
        },
      ],
      linkedinURL: faker.internet.url(),
      resumeURL:
        "https://firebasestorage.googleapis.com/v0/b/xso-app-dev.appspot.com/o/sdfsadf.pdf?alt=media&token=0f25cd5e-9e13-40e8-a5fa-1c0653f3dc82",
      resumeFile: faker.lorem.word(),
      youtubeIntroductionURL: faker.internet.url(),
      otherComments: faker.lorem.sentences(),
    };

    let app;

    objArr.push(fakeObj);
  }

  return res.status(200).json({
    data: objArr,
    paginationData: {
      totalDocs: 1,
      limit: 10,
      totalPages: 1,
      page: 1,
      pagingCounter: 1,
      hasPrevPage: false,
      hasNextPage: true,
      prevPage: null,
      nextPage: 2,
    },
  });
});

export default handler;
