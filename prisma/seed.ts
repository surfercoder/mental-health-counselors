import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

const transcripts = [
  {
    patientText: "I've been feeling really anxious lately, especially at work. I can't seem to focus and I'm constantly worrying about making mistakes.",
    counselorText: "I hear that you're experiencing significant anxiety at work. It sounds like this is affecting your ability to focus and perform. Let's explore what might be triggering these feelings. Can you tell me more about when these worries started?",
    patientAge: 32,
    patientGender: "Female",
    sessionType: "individual",
    mainIssue: "anxiety",
    sentimentScore: -0.6,
    responseType: "reflective"
  },
  {
    patientText: "I've been having trouble sleeping for the past few weeks. My mind keeps racing with thoughts about my relationship. I'm not sure if I should stay with my partner.",
    counselorText: "I understand that you're struggling with sleep and relationship concerns. These are significant issues that are affecting your well-being. Let's break this down into smaller parts. First, what specific aspects of your relationship are causing you the most concern?",
    patientAge: 28,
    patientGender: "Male",
    sessionType: "individual",
    mainIssue: "relationship",
    sentimentScore: -0.4,
    responseType: "questioning"
  },
  {
    patientText: "I feel like I'm not good enough at my job. Everyone else seems to be doing better than me, and I'm afraid I'll be fired.",
    counselorText: "It sounds like you're experiencing imposter syndrome and workplace anxiety. These feelings are common, but they can be very distressing. Let's examine the evidence - what specific feedback have you received from your supervisors?",
    patientAge: 35,
    patientGender: "Female",
    sessionType: "individual",
    mainIssue: "workplace",
    sentimentScore: -0.7,
    responseType: "direct_advice"
  },
  {
    patientText: "My parents are getting older and I'm worried about their health. I feel guilty that I can't do more to help them.",
    counselorText: "Caring for aging parents can bring up complex emotions, including guilt and worry. It's important to acknowledge these feelings while also recognizing your own limitations. What kind of support system do you have in place?",
    patientAge: 45,
    patientGender: "Male",
    sessionType: "individual",
    mainIssue: "family",
    sentimentScore: -0.5,
    responseType: "reflective"
  },
  {
    patientText: "I've been feeling really down lately. Nothing seems to bring me joy anymore, and I'm having trouble getting out of bed in the morning.",
    counselorText: "I'm concerned about what you're describing, as these can be symptoms of depression. Have you noticed any changes in your appetite or sleep patterns? It's important that we address these feelings and develop a plan to help you feel better.",
    patientAge: 30,
    patientGender: "Female",
    sessionType: "individual",
    mainIssue: "depression",
    sentimentScore: -0.8,
    responseType: "direct_advice"
  },
  {
    patientText: "My partner and I keep having the same argument about money. I feel like we're not on the same page about our financial goals.",
    counselorText: "Financial disagreements can be particularly challenging in relationships. Let's explore both of your perspectives on money and create a plan to align your financial goals. What specific aspects of your financial situation are causing the most tension?",
    patientAge: 38,
    patientGender: "Male",
    sessionType: "couples",
    mainIssue: "relationship",
    sentimentScore: -0.3,
    responseType: "reflective"
  },
  {
    patientText: "I'm struggling with my teenager. They're always on their phone and we can't seem to communicate anymore.",
    counselorText: "Parent-teen communication can be challenging, especially in the digital age. Let's work on strategies to improve your communication. What specific behaviors are you most concerned about?",
    patientAge: 42,
    patientGender: "Female",
    sessionType: "family",
    mainIssue: "parenting",
    sentimentScore: -0.4,
    responseType: "questioning"
  },
  {
    patientText: "I've been having panic attacks at work. They come out of nowhere and I'm afraid I'll have one during an important meeting.",
    counselorText: "Panic attacks can be very frightening, especially in a work environment. Let's develop some coping strategies you can use when you feel an attack coming on. Can you tell me more about what you experience during these attacks?",
    patientAge: 29,
    patientGender: "Female",
    sessionType: "individual",
    mainIssue: "anxiety",
    sentimentScore: -0.7,
    responseType: "direct_advice"
  }
]

async function main() {
  console.log('Start seeding...')
  
  for (const transcript of transcripts) {
    await prisma.counselingTranscript.create({
      data: transcript
    })
  }
  
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 