// app/utils.ts

"use server";

import OpenAI from "openai";
import { Message } from "./types";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
  project: process.env.OPENAI_PROJECT
});

export async function fetchAITranslation(prompt: string): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: `
          Act as a AI Translator, and translate this text for me from Chinese to English (Or opposite, based on context):
          ${prompt}
          ` }],
        model: "gpt-3.5-turbo"
      });
  
      const responseText = response.choices[0]?.message?.content?.trim() || "";
      return responseText;
    } catch (error) {
      console.error("Error communicating with OpenAI:", error);
      throw new Error("Error communicating with OpenAI");
    }
  }

  
  export async function fetchAITalk(messages: Message[]): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        messages,
        model: "gpt-4o-mini"
      });
  
      const responseText = response.choices[0]?.message?.content?.trim() || "";
      return responseText;
    } catch (error) {
      console.error("Error communicating with OpenAI:", error);
      throw new Error("Error communicating with OpenAI");
    }
  }
  
  

export async function fetchAIDictionary(prompt: string): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `
          # Dictionary for Words (学习）
  I want you to act as a Chinese Characters and Words Dictionary in this conversation, based on the sample I provided below whenever I ask a word or character
  some reminder:
  - The word examples should be as easy and simple as possible (about HSK1 level)
  - If the word Type is more than one, then you should generate 5 examples for each type, and also mark the example as "## Example #verb" and "## Example #noun"
  - That "#1time" is just a reminder that I have learned checked the word time, this is just a initial tag so i can track my memorizing process 
  -  (only generate the sample part below, without anything else so I can easily copy it without no modification)
  - hán việt is different from tiếng việt (translation to vietnamese), please find definition carefully
  
  ## Sample:
  #1time #meaning
  - Level: #HSK1
  - Components: [[爱]][[好]]
  - Pinyin: ài (爱) hào (好)
  - Hán Việt: ái (爱) hảo (好)
  - Tiếng Việt: sở thích
  - Explain: - The term "爱好" (ài hào) consists of "爱" (ài), meaning "to love," and "好" (hào), which can mean "to be fond of." As a noun, it refers to a "hobby" or "interest"—activities that a person enjoys doing in their leisure time. As a verb phrase, it translates to the act of enjoying or liking something.
  - Type: #noun, #verb 
  - Meaning: 
      - hobby (noun)
      - interest (noun)
          
          ${prompt}
          `
          }
        ],
        model: "gpt-3.5-turbo"
      });
  
      const responseText = response.choices[0]?.message?.content?.trim() || "";
      return responseText;
    } catch (error) {
      console.error("Error communicating with OpenAI:", error);
      throw new Error("Error communicating with OpenAI");
    }
  }





// export const TRANSLATOR = `
// Act as a AI Translator, and translate this text for me from Chinese to English (Or opposite, based on context)
// `

// export const DIALOG = `
// Create a conversation between 2 to 3 people with words provided below, use should make it clear and try reuse these words as much as possible, so I can memorize these words, get familiar with them using the "learn by context" technique
// `


// export const TALK = `
// Act as a Chinese Speaker, and talk to me in Chinese, based on the topic provided below, so I can practice listening and understanding Chinese
// `


// export const DICTIONARY = `
// # Dictionary for Words (学习）
// I want you to act as a Chinese Characters and Words Dictionary in this conversation, based on the sample I provided below whenever I ask a word or character
// some reminder:
// - The word examples should be as easy and simple as possible (about HSK1 level)
// - If the word Type is more than one, then you should generate 5 examples for each type, and also mark the example as "## Example #verb" and "## Example #noun"
// - That "#1time" is just a reminder that I have learned checked the word time, this is just a initial tag so i can track my memorizing process 
// -  (only generate the sample part below, without anything else so I can easily copy it without no modification)
// - hán việt is different from tiếng việt (translation to vietnamese), please find definition carefully

// Sample:
// #1time #meaning
// - Level: #HSK1
// - Components: [[爱]][[好]]
// - Pinyin: ài (爱) hào (好)
// - Hán Việt: ái (爱) hảo (好)
// - Tiếng Việt: sở thích
// - Explain: - The term "爱好" (ài hào) consists of "爱" (ài), meaning "to love," and "好" (hào), which can mean "to be fond of." As a noun, it refers to a "hobby" or "interest"—activities that a person enjoys doing in their leisure time. As a verb phrase, it translates to the act of enjoying or liking something.
// - Type: #noun, #verb 
// - Meaning: 
// 	- hobby (noun)
// 	- interest (noun)
// 	- to like (verb)
// 	- to be fond of (verb)
// ## Example #noun 
// 1. 读书是我的**爱好**。  
//     dúshū shì wǒ de **àihào**.  
//     Reading is my **hobby**.
// 2. 她有很多**爱好**。  
//     tā yǒu hěnduō **àihào**.  
//     She has many **interests**.
// 3. 我喜欢摄影，摄影是我的**爱好**。  
//     wǒ xǐhuān shèyǐng, shèyǐng shì wǒ de **àihào**.  
//     I like photography; photography is my **hobby**.
// 4. 你有什么**爱好**？  
//     nǐ yǒu shénme **àihào**?  
//     What are your **interests**?
// 5. 他的**爱好**是画画。  
//     tā de **àihào** shì huàhuà.  
//     His **hobby** is painting.
// ## Example #verb 
// 1. 我**爱好**运动。  
//     wǒ **àihào** yùndòng.  
//     I **like** sports.
// 2. 她**爱好**唱歌。  
//     tā **àihào** chànggē.  
//     She **loves** singing.
// 3. 他们**爱好**旅行。  
//     tāmen **àihào** lǚxíng.  
//     They **like** to travel.
// 4. 你**爱好**什么？  
//     nǐ **àihào** shénme?  
//     What do you **like**?
// 5. 我**爱好**学习新东西。  
//     wǒ **àihào** xuéxí xīn dōngxi.  
//     I **enjoy** learning new things.
// `