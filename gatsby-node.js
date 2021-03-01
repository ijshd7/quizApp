const axios = require('axios');
const crypto = require('crypto');
const he = require('he');

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions;
  
    const fetchQuestions = () => axios.get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`);
    
    const res = await fetchQuestions();
  
    res.data.results.map((q, i) => {
      const questionNode = {
        id: `${i}`,
        parent: `__SOURCE__`,
        internal: {
          type: `Question`,
        },
        children: [],
        category: q.category,
        difficulty: q.difficulty,
        correct_answer: q['correct_answer'],
        question: he.decode(q.question),
      }
  
      const contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(questionNode))
        .digest(`hex`);
      questionNode.internal.contentDigest = contentDigest;
  
      createNode(questionNode);
    });
  
    return;
}