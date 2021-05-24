const axios = require('axios');

async function sendHookToSlack(pretext, title, content) {
  try {
    const url = process.env.SLACK_HOOK_ENDPOINT;
    const payload = {
      fallback: '',
      pretext,
      color: '#30df84',
      fields: [
        {
          title,
          value: content,
        },
      ],
    };

    await axios.post(
      url,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
      },
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = sendHookToSlack;
