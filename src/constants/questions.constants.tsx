export interface IQuestion {
  name: string;
  type: string;
  question: string;
  options?: string[] | IOption[];
  placeholder?: string;
  hasCurrencyDropdownMenu?: boolean;
}

export interface IOption {
  text: string;
  image: string;
}

export const QuestionsConstants: IQuestion[] = [
  {
    name: "Duration",
    type: "input-options",
    question: "What's the duration of your event?",
    options: [
      "Less than a day",
      "1 day",
      "Multiple days",
      "Always on / 365 community platform",
    ],
  },
  {
    name: "Attendees",
    type: "input-number",
    question: "How many attendees are you aiming for?",
    placeholder: "Number of attendees",
  },
  {
    name: "Experience",
    type: "input-options",
    question: "What experience would you like?",

    options: [
      {
        text: "2D (standard)",
        image: "/images/2D.png",
      },
      {
        text: "Semi 2D (including 3D images, without the option to walk around)",
        image: "/images/Semi2D.png",
      },
      {
        text: "3D MR (possibility of walking around using your avatar",
        image: "/images/3DMR.png",
      },
      {
        text: "3D VR (immersive experience requiring VR glasses to walk around, using your avatar",
        image: "/images/3DVR.png",
      },
    ],
  },
  {
    name: "Customize",
    type: "input-options",
    question: "What level of customization do you need?",
    options: [
      "No customization needed",
      "Adding my brand colors to certain elements",
      "Fully rebrand the environment with my logo (white-label)",
      "Change the complete setup of the event platform",
    ],
  },
  {
    name: "Support",
    type: "input-options",
    question: "What level of support do you require?",
    options: [
      "I want to do everything in-house",
      "I need assistance in setting up the platform",
      "I need support during the event",
      "I need 24/7 support before, during, and after the event",
    ],
  },
  {
    name: "Budget",
    type: "input-number",
    question: "What is the budget for your event platform?",
    hasCurrencyDropdownMenu: true,
    placeholder: "Enter your budget",
  },
];
