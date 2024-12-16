import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { createOpenAI } from '@ai-sdk/openai';

export const aiProvider = createOpenAICompatible({
  baseURL: process.env.OPENAI_API_BASE_URL,
  name: 'example',
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
});

export const aiChatModel = aiProvider.chatModel(process.env.CHAT_MODEL_NAME || 'gpt-4o');


export default aiProvider;