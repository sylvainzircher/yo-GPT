import crypto from "crypto";

function generate_token(length) {
  return crypto.randomBytes(length).toString("hex").substring(0, length);
}

const formatDeepSeek = (content) => {
  const formattedContent = content.replace(
    /<think>(.*?)<\/think>/gs,
    "---- \n\n Start of reasoning: \n\n $1 \n\n End of reasoning \n\n ---- "
  );
  return formattedContent;
};

export { generate_token, formatDeepSeek };
