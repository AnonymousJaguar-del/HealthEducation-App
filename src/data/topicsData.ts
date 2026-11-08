import { Question, TopicContent } from '../types';

// Pre & Post Test question sets, taken verbatim (questions and option order) from the
// HRI Schools Module PDF. The same set is used for both the pre-test and the post-test.

// Module 1 Pre & Post Test
const module1Questions: Question[] = [
  {
    id: 'm1-q1',
    question: 'How many chambers does your heart have?',
    options: ['Six', 'Five', 'Four', 'Three'],
    correctAnswerIndex: 2,
    explanation: 'The heart has four chambers: two atria and two ventricles.'
  },
  {
    id: 'm1-q2',
    question: 'Your heart is a/an',
    options: ['Centre for thoughts and feelings', 'Specialized muscular organ', 'Artery', 'Vein'],
    correctAnswerIndex: 1,
    explanation: 'The heart is a specialized muscular organ that pumps blood.'
  },
  {
    id: 'm1-q3',
    question: 'What is the function of your heart?',
    options: [
      'Helps you breathe',
      'Helps in digestion',
      'Supplies nutrition and oxygen to the entire body through blood',
      'It excretes waste products out of the body'
    ],
    correctAnswerIndex: 2,
    explanation: 'The heart pumps blood that carries nutrition and oxygen to the entire body.'
  },
  {
    id: 'm1-q4',
    question: 'How many times does your heart beat in a minute?',
    options: ['80', '20', '140', '40'],
    correctAnswerIndex: 0,
    explanation: 'At rest, the heart beats about 80 times a minute.'
  },
  {
    id: 'm1-q5',
    question: 'How does your heart receive nutrition and oxygen?',
    options: [
      'From the blood in your heart',
      'From small arteries on the heart',
      'From your stomach',
      'From your brain'
    ],
    correctAnswerIndex: 1,
    explanation: 'The heart muscle gets its blood supply from small (coronary) arteries on its surface.'
  },
];

// Module 2 Pre & Post Test
const module2Questions: Question[] = [
  {
    id: 'm2-q1',
    question: 'Risks for a heart attack include:',
    options: ['High blood pressure', 'Smoking', 'Lack of exercise', 'All of the above'],
    correctAnswerIndex: 3,
    explanation: 'High blood pressure, smoking and lack of exercise all increase the risk of a heart attack.'
  },
  {
    id: 'm2-q2',
    question: 'A person with Heart Attack can have sudden cardiac arrest',
    options: ['True', 'False'],
    correctAnswerIndex: 0,
    explanation: 'A heart attack can lead to sudden cardiac arrest, so never leave the person alone.'
  },
  {
    id: 'm2-q3',
    question: 'A patient with heart attack can present with:',
    options: ['Chest pain', 'Shoulder or left arm pain', 'Sweating or fainting', 'All the above'],
    correctAnswerIndex: 3,
    explanation: 'Chest pain, shoulder or left arm pain, and sweating or fainting are all warning signs of a heart attack.'
  },
  {
    id: 'm2-q4',
    question: 'What will you do when you identify a person who could be having a Heart attack?',
    options: [
      'Give water to drink',
      'Give gastritis medication',
      'Call an ambulance and take to nearest Hospital immediately',
      'Give rest and watch for recovery'
    ],
    correctAnswerIndex: 2,
    explanation: 'Call 108 for an ambulance and get the person to the nearest hospital immediately.'
  },
];

// Module 3-6 Pre-Test (Bystander response and compression-only CPR)
const cprModuleQuestions: Question[] = [
  {
    id: 'm3-q1',
    question: 'What is your next action as a bystander after checking response in a collapsed victim and found unresponsiveness?',
    options: ['Take victim to hospital', 'Check response again to confirm', 'Shout for Help', 'Check scene safety'],
    correctAnswerIndex: 2,
    explanation: 'Scene safety, check response, then call for help: shout "Help! Help! Here is a collapsed victim".'
  },
  {
    id: 'm3-q2',
    question: 'As a bystander if you find an unresponsive victim is having abnormal breathing/gasping, what is your next action?',
    options: [
      'Since the victim is still having some breathing, wait till help arrives',
      'Call 108 and ask to send EMS and AED and start Chest Compressions',
      'Start Chest compressions',
      'Give mouth-to-mouth breathing'
    ],
    correctAnswerIndex: 1,
    explanation: 'Gasping or snorting is not normal breathing. Call 108, ask for EMS and an AED, and start chest compressions.'
  },
  {
    id: 'm3-q3',
    question: 'As a bystander you have called for help after finding an unresponsive victim, if another bystander arrives on scene what will you instruct him/her?',
    options: [
      'Call 108 and tell them to send EMS with AED for a collapsed unresponsive victim',
      'Go find an AED and come back to the scene',
      'Go get additional help',
      'Assist in CPR'
    ],
    correctAnswerIndex: 0,
    explanation: 'Ask the person who arrives to call 108, tell them about the collapsed victim, and ask them to send EMS and an AED.'
  },
  {
    id: 'm3-q4',
    question: 'What is the recommended required depth of chest compressions?',
    options: ['1 inch', '2 inches', '3 inches', 'None of the above'],
    correctAnswerIndex: 1,
    explanation: 'Compress the chest at least two inches.'
  },
  {
    id: 'm3-q5',
    question: 'What is the recommended rate of chest compressions for bystanders?',
    options: ['At least 100 in one minute', 'At least 150 in one minute', 'At least 50 in one minute', 'None of the above'],
    correctAnswerIndex: 0,
    explanation: 'Compress the chest at a rate of at least 100 per minute.'
  },
  {
    id: 'm3-q6',
    question: 'Which of the following best describes the correct steps of a bystander upon finding a collapsed victim?',
    options: [
      'Check scene safety, check response, call for help, check breathing',
      'Call for help, Check breathing and start chest compressions',
      'Call for help and start chest compressions',
      'Give two rescue breaths and start chest compressions'
    ],
    correctAnswerIndex: 0,
    explanation: 'Check scene safety, check response, call for help, then check for normal breathing.'
  },
  {
    id: 'm3-q7',
    question: 'If AED is unavailable, what is your next step as a bystander?',
    options: [
      'Continue chest compressions till help arrives',
      'Stop chest compressions',
      'Stop chest compressions and go in search of AED',
      'None of the above'
    ],
    correctAnswerIndex: 0,
    explanation: 'If no AED is available, continue chest compressions until paramedics arrive.'
  },
  {
    id: 'm3-q8',
    question: 'As a bystander performing chest compressions, when will you stop compressions?',
    options: ['After 5 minutes', 'After use of AED', 'Till you get tired', 'Till help arrives'],
    correctAnswerIndex: 3,
    explanation: 'Keep going until paramedics arrive. When you get tired, take turns with others.'
  },
];

// Pre & Post Test (Module 7,8) - shared by Nutrition & Physical Activity and CVD Risk Factors
const module7And8Questions: Question[] = [
  {
    id: 'm78-q1',
    question: 'Which of the following sources of fat are good for the heart?',
    options: ['Butter', 'Cheese', 'Mutton', 'Fish'],
    correctAnswerIndex: 3,
    explanation: 'Fish is a heart-healthy source of fat; butter, cheese and mutton are not.'
  },
  {
    id: 'm78-q2',
    question: 'Which of the following are risk factors for a heart attack ?',
    options: ['Smoking', 'High blood pressure', 'Uncontrolled diabetes', 'All of the above'],
    correctAnswerIndex: 3,
    explanation: 'Smoking, high blood pressure and diabetes are all major risk factors for heart disease.'
  },
  {
    id: 'm78-q3',
    question: 'Smoking is a direct cause of :',
    options: ['Heart attack', 'Stroke', 'Lung cancer', 'All of the above'],
    correctAnswerIndex: 3,
    explanation: 'Smoking directly causes heart attack, stroke and lung cancer.'
  },
  {
    id: 'm78-q4',
    question: 'Which of the following is good for the heart?',
    options: [
      'Eating food high in cholesterol and sugar',
      'Being physically active',
      'Smoking',
      'Not taking medications for high blood pressure'
    ],
    correctAnswerIndex: 1,
    explanation: 'Regular physical activity keeps the heart healthy.'
  },
  {
    id: 'm78-q5',
    question: 'Which of the following is good for your heart?',
    options: ['Fried foods', 'Fresh fruits and vegetables', 'Sweets', 'Baked food'],
    correctAnswerIndex: 1,
    explanation: 'Fresh fruits and vegetables are part of a heart-healthy diet.'
  },
];

// Module 9 Pre & Post Test (Stroke)
const module9Questions: Question[] = [
  {
    id: 'm9-q1',
    question: 'What is a stroke?',
    options: [
      'Blocked blood vessel in the brain',
      'Bleeding in the brain from a blood vessel',
      'Loss of oxygen to a part of the brain',
      'All of the above'
    ],
    correctAnswerIndex: 3,
    explanation: 'A stroke can be a blocked or bleeding blood vessel in the brain, causing loss of oxygen to part of the brain.'
  },
  {
    id: 'm9-q2',
    question: 'What is / are the risk factors for stroke?',
    options: ['Smoking', 'Diabetes', 'High blood pressure', 'All of the above'],
    correctAnswerIndex: 3,
    explanation: 'Smoking, diabetes and high blood pressure are all risk factors for stroke.'
  },
  {
    id: 'm9-q3',
    question: 'A patient with stroke can present with ___________',
    options: ['Limb Weakness', 'Slurring of speech', 'Facial Asymmetry', 'All of the above'],
    correctAnswerIndex: 3,
    explanation: 'Remember F-A-S-T: Face droop, Arm weakness, Speech problem, Time to call 108.'
  },
  {
    id: 'm9-q4',
    question: 'What will you do when you identify a person who could be having a Stroke?',
    options: [
      'Give water to drink',
      'Do CPR',
      'Call an ambulance and take to nearest Hospital immediately',
      'Give rest and watch for recovery'
    ],
    correctAnswerIndex: 2,
    explanation: 'Time to call 108: get the person to the nearest hospital immediately.'
  },
];

export const topicsData: TopicContent[] = [
  {
    id: 'heart-anatomy',
    title: 'Module 1: Know Your Heart & Circulation',
    shortDescription: 'Understand cardiac anatomy, the 4 chambers, coronary blood supply, and resting pulse rate.',
    iconName: 'Heart',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    identification: {
      title: 'Anatomy & Physiology of the Human Heart',
      subtitle: 'The essential structure and biological function of the cardiovascular pump.',
      type: 'facts',
      items: [
        {
          label: 'Specialized Muscular Organ',
          description: 'The heart is a hollow, muscular organ located in the chest behind the breastbone (sternum), tilted slightly to the left.',
          iconName: 'Heart',
          highlight: true,
        },
        {
          label: 'Four Pumping Chambers',
          description: 'Two upper receiving chambers (right atrium & left atrium) and two lower pumping chambers (right ventricle & left ventricle).',
          iconName: 'LayoutGrid',
          highlight: false,
        },
        {
          label: 'One-Way Heart Valves',
          description: 'Four valves (tricuspid, pulmonary, mitral, and aortic) ensure oxygen-depleted and oxygenated blood always flow in one direction without backflow.',
          iconName: 'ArrowRightLeft',
          highlight: false,
        },
        {
          label: 'Coronary Blood Supply',
          description: 'The heart muscle receives its own oxygen and nutrients not from chamber blood, but from small coronary arteries branching over its surface.',
          iconName: 'GitBranch',
          highlight: true,
        },
        {
          label: 'Normal Resting Pulse (72–80 BPM)',
          description: 'In a healthy resting individual, the heart contracts approximately 70 to 80 times per minute, easily felt at the radial (wrist) or carotid (neck) pulse.',
          iconName: 'Activity',
          highlight: false,
        },
      ],
      notes: [
        'The heart beats over 100,000 times per day, continuously pumping oxygen-rich blood to all vital body organs.',
        'If a coronary artery becomes blocked by a clot or fatty plaque, the downstream heart muscle is starved of oxygen, causing ischemia and a heart attack.'
      ],
    },
    firstAid: {
      title: 'Practical Cardiac Activities & Assessments',
      subtitle: 'Hands-on checks to assess heart function and pulse response.',
      type: 'stepByStep',
      items: [
        {
          label: '1. Locate the Heart Correctly',
          description: 'Place your hand over the center of your chest, just behind the breastbone and slightly toward the left side.',
          iconName: 'MapPin',
          highlight: false,
        },
        {
          label: '2. Check Your Radial Pulse (Wrist)',
          description: 'Place the tips of your index and middle fingers on the inside of the opposite wrist, just below the base of the thumb. Press gently until you feel the rhythmic beat.',
          iconName: 'Hand',
          highlight: true,
        },
        {
          label: '3. Count Your Resting Heart Rate',
          description: 'Count the beats for 30 seconds and multiply by 2 (or count for a full 60 seconds). A typical resting rate is 60–100 beats per minute (commonly ~80 bpm).',
          iconName: 'Clock',
          highlight: false,
        },
        {
          label: '4. Observe Exercise Response (Squats Activity)',
          description: 'Perform 20 squats. Check your pulse again immediately. The rate increases noticeably because working muscles demand more oxygen and fuel.',
          iconName: 'TrendingUp',
          highlight: true,
        },
      ],
      notes: [
        'Never press both carotid arteries (in the neck) at the same time, as this can restrict cerebral blood flow.',
        'A strong, conditioned heart beats more efficiently, maintaining lower resting rates and recovering quickly after exercise.'
      ],
    },
    questions: module1Questions,
  },
  {
    id: 'chest-pain',
    title: 'Module 2: Chest Pain & Heart Attack Signs',
    shortDescription: 'Differentiate angina from a heart attack, recognize warning signs, and take immediate action.',
    iconName: 'ShieldAlert',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    identification: {
      title: '5 Warning Signs of a Heart Attack',
      subtitle: 'How to differentiate angina from an acute myocardial infarction and recognize red flags.',
      type: 'mnemonic',
      items: [
        {
          label: 'Central Chest Discomfort',
          description: 'Uncomfortable pressure, fullness, squeezing, tightness, or crushing pain in the center of the chest lasting more than a few minutes.',
          iconName: 'ShieldAlert',
          highlight: true,
        },
        {
          label: 'Radiating Pain (Arm, Neck, Jaw, Back)',
          description: 'Discomfort spreading to one or both arms (especially the left arm/shoulder), neck, jaw, throat, or upper back.',
          iconName: 'TrendingUp',
          highlight: true,
        },
        {
          label: 'Shortness of Breath (Dyspnea)',
          description: 'Difficulty breathing or sudden gasping for air, which can occur with or without chest discomfort.',
          iconName: 'Wind',
          highlight: false,
        },
        {
          label: 'Profuse Cold Sweating & Dizziness',
          description: 'Breaking out in a sudden cold sweat (diaphoresis), feeling faint, lightheaded, or experiencing sudden collapse.',
          iconName: 'Sparkles',
          highlight: true,
        },
        {
          label: 'Nausea & Gastric Distress',
          description: 'Stomach discomfort, nausea, vomiting, or a feeling often mistaken for "gastritis" or "acid reflux".',
          iconName: 'AlertCircle',
          highlight: false,
        },
      ],
      notes: [
        'Angina vs Heart Attack: Angina is temporary reduced blood flow (often with exertion, relieved by rest). A Heart Attack is prolonged blockage causing irreversible muscle damage.',
        'A person suffering a Heart Attack can rapidly collapse into Sudden Cardiac Arrest (SCA). Never leave them unattended.'
      ],
    },
    firstAid: {
      title: 'Emergency Actions for Suspected Heart Attack',
      subtitle: 'Immediate pre-hospital measures to minimize cardiac damage.',
      type: 'stepByStep',
      items: [
        {
          label: '1. Call 108 Immediately',
          description: 'Dial 108 or your local emergency number right away. Never delay or wait to see if the symptoms go away on their own.',
          iconName: 'PhoneCall',
          highlight: true,
        },
        {
          label: '2. Enforce Absolute Rest (Half-Sitting)',
          description: 'Place the person in a comfortable seated position on the floor or a sturdy chair with their back supported. Rest reduces cardiac workload.',
          iconName: 'User',
          highlight: false,
        },
        {
          label: '3. Loosen Tight Clothing',
          description: 'Unbutton tight collars, loosen neckties, belts, and snug waistbands to facilitate easy breathing.',
          iconName: 'Scissors',
          highlight: false,
        },
        {
          label: '4. Reassure & Stay Calm',
          description: 'Keep the patient calm and quiet. Anxiety and panic elevate heart rate and increase myocardial oxygen demand.',
          iconName: 'Heart',
          highlight: false,
        },
        {
          label: '5. Prepare for CPR & AED',
          description: 'Keep a close eye on responsiveness and breathing. If the patient loses consciousness and stops breathing normally, start CPR immediately.',
          iconName: 'Activity',
          highlight: true,
        },
      ],
      notes: [
        'DO NOT give home remedies, soda, or gastritis medicines—this causes fatal delays in reaching catheterization labs.',
        'DO NOT allow the person to walk, drive themselves, or exert their body.'
      ],
    },
    questions: module2Questions,
  },
  {
    id: 'cpr-aed',
    title: 'Module 3: Bystander CPR & AED (3Cs & 4Cs)',
    shortDescription: 'Master hands-only CPR, the 3C/4C approach, chest compressions at 100/min, and AED deployment.',
    iconName: 'Zap',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-700',
    identification: {
      title: 'The 3C and 4C Bystander Response Protocols',
      subtitle: 'Recognize Sudden Cardiac Arrest (SCA) and deploy rapid life-saving intervention.',
      type: 'stepByStep',
      items: [
        {
          label: 'Cardiac Arrest Recognition',
          description: 'The victim collapses suddenly, becomes completely unresponsive, and is either not breathing or exhibiting abnormal agonal gasps/snorts.',
          iconName: 'AlertCircle',
          highlight: true,
        },
        {
          label: 'The 3C Approach (Normal Breathing)',
          description: '1. CHECK for responsiveness | 2. CALL 108 for help | 3. CARE for victim (place in recovery position, monitor airway & breathing until ambulance arrives).',
          iconName: 'CheckCircle',
          highlight: false,
        },
        {
          label: 'The 4C Approach (No Normal Breathing)',
          description: '1. CHECK responsiveness & breathing | 2. CALL 108 & get AED | 3. COMPRESS chest at 100/min | 4. CLEAR for AED instructions.',
          iconName: 'Flame',
          highlight: true,
        },
        {
          label: 'Hands-Only Chest Compressions',
          description: 'Place heels of interlocked hands in center of chest. Push hard and fast: at least 2 inches (5 cm) deep, at a rate of 100–120 beats per minute. Allow full chest recoil!',
          iconName: 'Heart',
          highlight: true,
        },
        {
          label: 'Automated External Defibrillator (AED)',
          description: 'An AED checks heart rhythm and delivers a life-saving shock if ventricular fibrillation is detected. Voice prompts guide every single step.',
          iconName: 'Zap',
          highlight: false,
        },
      ],
      notes: [
        'Agonal gasps are NOT normal breathing; they are a sign of cardiac arrest. Start chest compressions immediately!',
        'Brain damage begins within 4 to 6 minutes without blood flow. Early bystander CPR doubles or triples survival chances.'
      ],
    },
    firstAid: {
      title: 'Step-by-Step Hands-Only CPR & AED Flow',
      subtitle: 'High-quality resuscitation technique for lay bystanders.',
      type: 'stepByStep',
      items: [
        {
          label: '1. C - Check Responsiveness & Scene Safety',
          description: 'Verify the scene is safe. Tap both shoulders firmly and shout loudly: "Are you all right?" If no response, check breathing.',
          iconName: 'UserCheck',
          highlight: true,
        },
        {
          label: '2. C - Call 108 & Request AED',
          description: 'Point directly to someone: "You, call 108 and find an AED!" If alone with a phone, put it on speaker with 108 dispatch.',
          iconName: 'PhoneCall',
          highlight: true,
        },
        {
          label: '3. C - Compress the Chest',
          description: 'Position victim flat on their back on the floor. Place heel of hand on center of chest, other hand on top. Lock elbows. Push straight down at least 2 inches at 100/min.',
          iconName: 'Heart',
          highlight: true,
        },
        {
          label: '4. Allow Full Chest Recoil',
          description: 'Lift your body weight slightly between compressions so the chest fully springs back. Recoil allows blood to refill the heart chambers.',
          iconName: 'RefreshCw',
          highlight: false,
        },
        {
          label: '5. C - Clear for AED',
          description: 'When the AED arrives, open it and turn it on. Stick pads onto the bare chest as illustrated. Shout "STAND CLEAR!" when analyzing or delivering shock.',
          iconName: 'Zap',
          highlight: true,
        },
      ],
      notes: [
        'Do not interrupt compressions for more than 10 seconds. When tired, switch rescuers every 2 minutes.',
        'Continue compressions until emergency paramedics arrive, the AED advises to stand clear, or the victim wakes up.'
      ],
    },
    questions: cprModuleQuestions,
  },
  {
    id: 'nutrition-exercise',
    title: 'Module 4: Lifestyle Choices: Nutrition & Exercise',
    shortDescription: 'Constituents of a heart-healthy diet, good vs bad fats, and achieving 30–60 minutes of daily activity.',
    iconName: 'Apple',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    identification: {
      title: 'Heart-Healthy Nutrition & Activity Standards',
      subtitle: 'Nutritional choices and aerobic exercise guidelines to prevent cardiovascular disease.',
      type: 'comparison',
      items: [
        {
          label: 'Good Fats (Unsaturated / Omega-3)',
          description: 'Fish (salmon, mackerel, sardines), nuts, seeds, olive oil, and vegetable oils that protect blood vessels and lower inflammation.',
          iconName: 'Sparkles',
          highlight: false,
        },
        {
          label: 'Bad Fats (Saturated & Trans Fats)',
          description: 'Butter, cheese, fatty mutton, ghee in excess, trans fats in deep-fried snacks, and baked packaged foods that clog arteries.',
          iconName: 'AlertCircle',
          highlight: true,
        },
        {
          label: 'Abundant Produce & Whole Grains',
          description: 'Fresh fruits, green leafy vegetables, lentils, beans, and high-fiber whole grains that control cholesterol and blood pressure.',
          iconName: 'Apple',
          highlight: false,
        },
        {
          label: '30 to 60 Minutes Daily Physical Activity',
          description: 'At least 30–60 minutes of moderate-to-vigorous physical activity every day strengthens the heart muscle and improves circulation.',
          iconName: 'Activity',
          highlight: true,
        },
        {
          label: 'Hydration & Sugar Reduction',
          description: 'Drinking plain water instead of carbonated soft drinks, sugary sodas, and sweetened beverages to prevent obesity and diabetes.',
          iconName: 'Droplets',
          highlight: false,
        },
      ],
      notes: [
        'A balanced diet low in sodium and free of trans fats reduces the risk of stroke and coronary artery disease by over 50%.',
        'Physical activity can be divided into two 15-minute sessions throughout the day and still deliver substantial cardiac benefits.'
      ],
    },
    firstAid: {
      title: 'Daily Cardio Wellness & Activity Routine',
      subtitle: 'Building a consistent routine for lifelong cardiac health.',
      type: 'stepByStep',
      items: [
        {
          label: '1. Food Substitution Habit',
          description: 'Replace fried snacks (samosas, chips) with a bowl of fresh fruit, raw carrot sticks, or a handful of roasted unsalted nuts.',
          iconName: 'Apple',
          highlight: false,
        },
        {
          label: '2. Track Your 60-Minute Activity Log',
          description: 'Log active minutes each day: brisk walking, cycling, skipping rope, playing outdoor sports, or household active chores.',
          iconName: 'CheckSquare',
          highlight: true,
        },
        {
          label: '3. Squat & Pulse Activity',
          description: 'Check pulse before exercise. Do 20 squats and re-measure. Notice the healthy rise in heart rate as cardiac output adjusts to muscle demand.',
          iconName: 'Activity',
          highlight: false,
        },
        {
          label: '4. Cut Down Added Salt (Sodium)',
          description: 'Avoid sprinkling extra table salt on meals and minimize processed foods to keep blood pressure in a safe range.',
          iconName: 'ShieldAlert',
          highlight: true,
        },
      ],
      notes: [
        'Regular physical activity lowers resting blood pressure, decreases bad LDL cholesterol, and raises protective HDL cholesterol.',
        'Share your 60-minute activity log with family members to inspire household-wide healthy habits.'
      ],
    },
    questions: module7And8Questions,
  },
  {
    id: 'risk-factors',
    title: 'Module 5: Heart Disease Risk Factors & Prevention',
    shortDescription: 'Understand modifiable CVD risk factors, hazards of tobacco, and AHA Life’s Simple 7.',
    iconName: 'TrendingUp',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    identification: {
      title: 'Major Cardiovascular Risk Factors',
      subtitle: 'Modifiable vs contributing risk factors and their physiological impacts.',
      type: 'facts',
      items: [
        {
          label: '1. Tobacco Smoke',
          description: 'Smoking or chewing tobacco directly damages blood vessel linings (endothelium), accelerates plaque rupture, and causes heart attacks and strokes.',
          iconName: 'Flame',
          highlight: true,
        },
        {
          label: '2. High Blood Pressure (Hypertension)',
          description: 'The "silent killer" because it often has no symptoms while causing long-term damage to the heart, arteries, brain, and kidneys.',
          iconName: 'Activity',
          highlight: true,
        },
        {
          label: '3. High Blood Cholesterol',
          description: 'Excess LDL ("bad") cholesterol deposits inside the coronary arterial walls, narrowing blood flow and forming unstable plaques.',
          iconName: 'TrendingUp',
          highlight: false,
        },
        {
          label: '4. Physical Inactivity',
          description: 'Sedentary lifestyles double the risk of cardiovascular disease compared to people who engage in regular aerobic movement.',
          iconName: 'UserX',
          highlight: false,
        },
        {
          label: '5. Obesity & Overweight',
          description: 'Excess body fat strains the heart, elevates blood pressure, increases harmful blood lipids, and triggers diabetes.',
          iconName: 'Scale',
          highlight: false,
        },
        {
          label: '6. Diabetes Mellitus',
          description: 'Uncontrolled high blood sugar damages vascular endothelial walls, dramatically accelerating cardiovascular disease.',
          iconName: 'Droplet',
          highlight: true,
        },
      ],
      notes: [
        'Contributing risk factors: Chronic psychological stress and excess alcohol consumption increase sympathetic stimulation and elevate cardiac risk.',
        'Most cardiovascular disease is preventable through early detection, lifestyle modifications, and proper medical management.'
      ],
    },
    firstAid: {
      title: 'AHA Life’s Simple 7 Prevention Framework',
      subtitle: 'Seven lifestyle steps adapted from the American Heart Association.',
      type: 'stepByStep',
      items: [
        {
          label: '1. Manage Blood Pressure',
          description: 'Have your blood pressure checked regularly. Keep readings below 120/80 mmHg through diet, exercise, and prescribed medication.',
          iconName: 'Activity',
          highlight: true,
        },
        {
          label: '2. Control Cholesterol',
          description: 'Eat meals rich in soluble fiber and low in saturated fats to keep LDL cholesterol within healthy limits.',
          iconName: 'TrendingDown',
          highlight: false,
        },
        {
          label: '3. Reduce Blood Sugar',
          description: 'Cut out refined sugars and sweetened drinks. Regularly monitor fasting and postprandial glucose levels.',
          iconName: 'Droplets',
          highlight: true,
        },
        {
          label: '4. Get Active',
          description: 'Engage in at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous exercise each week.',
          iconName: 'Zap',
          highlight: false,
        },
        {
          label: '5. Eat Better',
          description: 'Consume plenty of vegetables, fruits, whole grains, and lean proteins while avoiding trans fats and sodium.',
          iconName: 'Apple',
          highlight: false,
        },
        {
          label: '6. Maintain Healthy Weight',
          description: 'Keep your Body Mass Index (BMI) in the healthy range (18.5–24.9 kg/m²) to reduce cardiac strain.',
          iconName: 'CheckCircle',
          highlight: false,
        },
        {
          label: '7. Stop Smoking & Avoid Tobacco',
          description: 'Quitting tobacco improves blood vessel function and reduces heart attack risk by 50% within just one year!',
          iconName: 'ShieldAlert',
          highlight: true,
        },
      ],
      notes: [
        'Teach these 7 simple steps to at least 7 people in your community to spread lifesaving awareness.',
        'Encourage adult family members to know their numbers: blood pressure, blood glucose, and cholesterol.'
      ],
    },
    questions: module7And8Questions,
  },
  {
    id: 'stroke-fast',
    title: 'Module 6: Stroke Recognition (F-A-S-T)',
    shortDescription: 'Recognize acute stroke signs using the F-A-S-T mnemonic and deliver emergency 108 triage.',
    iconName: 'Brain',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    identification: {
      title: 'F-A-S-T Stroke Warning Signs',
      subtitle: 'A stroke is a "brain attack" requiring immediate emergency response. Time is Brain!',
      type: 'mnemonic',
      items: [
        {
          label: 'F - Face Drooping',
          description: 'One side of the face droops or is numb. Ask the person to smile; check if the smile is uneven, lopsided, or asymmetric.',
          iconName: 'Smile',
          highlight: true,
        },
        {
          label: 'A - Arm Weakness',
          description: 'One arm feels weak or numb. Ask them to raise both arms. Does one arm drift downward or cannot be held up?',
          iconName: 'Activity',
          highlight: true,
        },
        {
          label: 'S - Speech Difficulty',
          description: 'Speech is slurred, garbled, or completely absent. Ask them to repeat a simple sentence like "The sky is blue".',
          iconName: 'MessageSquare',
          highlight: true,
        },
        {
          label: 'T - Time to Call 108',
          description: 'If ANY of these signs are present, call 108 immediately! Check your watch and record the exact time symptoms first began.',
          iconName: 'Clock',
          highlight: true,
        },
      ],
      notes: [
        'A stroke occurs when blood flow to a region of the brain is interrupted by a blocked vessel (ischemic stroke) or bleeding (hemorrhagic stroke).',
        'Over 1.9 million brain neurons die every single minute a stroke is left untreated. Rapid transport to a stroke-ready hospital is critical!'
      ],
    },
    firstAid: {
      title: 'Emergency Care Actions for Acute Stroke',
      subtitle: 'Crucial do’s and don’ts when suspecting an acute cerebrovascular event.',
      type: 'stepByStep',
      items: [
        {
          label: '1. Call 108 Immediately',
          description: 'State clearly to emergency dispatch: "Suspected stroke patient with acute neurological deficits."',
          iconName: 'PhoneCall',
          highlight: true,
        },
        {
          label: '2. Note the Exact Time of Onset',
          description: 'Write down the exact minute symptoms were first observed. Clot-busting medication (thrombolysis) must be given within a strict 4.5-hour window.',
          iconName: 'Clock',
          highlight: true,
        },
        {
          label: '3. Position Safely & Support Head',
          description: 'Have the person rest comfortably with head and shoulders slightly elevated. If unconscious but breathing, turn them into the recovery position.',
          iconName: 'User',
          highlight: false,
        },
        {
          label: '4. NEVER Give Food, Water, or Aspirin',
          description: 'Stroke often paralyzes swallowing reflexes (dysphagia). Liquids or food will enter the lungs, causing fatal choking or aspiration pneumonia.',
          iconName: 'ShieldAlert',
          highlight: true,
        },
      ],
      notes: [
        'NEVER give aspirin before a hospital CT scan—if the stroke is caused by bleeding (hemorrhage), aspirin can accelerate fatal intracranial hemorrhage!',
        'Stay with the patient, keep them calm, and monitor breathing until the 108 ambulance arrives.'
      ],
    },
    questions: module9Questions,
  },
  {
    id: 'community-outreach',
    title: 'Module 7: Community & Family Outreach',
    shortDescription: 'Empower students as community health ambassadors, share knowledge with 7 people, and utilize 108.',
    iconName: 'Users',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-700',
    identification: {
      title: 'Students as Agents of Community Change',
      subtitle: 'HeartRescue India School Program mission and family health engagement.',
      type: 'facts',
      items: [
        {
          label: 'The HeartRescue Mission',
          description: 'A collaboration between Ramaiah Medical College, Medtronic Foundation, and University of Illinois Chicago to train students and teachers as community champions.',
          iconName: 'Heart',
          highlight: false,
        },
        {
          label: 'The 7-Person Challenge',
          description: 'Every student is tasked with educating at least 7 family members, relatives, or neighbors about heart attack recognition, hands-only CPR, and stroke signs.',
          iconName: 'Users',
          highlight: true,
        },
        {
          label: 'Cardiovascular Risk Screening (WHO/ISH)',
          description: 'Helping parents and elders understand their 10-year cardiovascular risk scores based on age, blood pressure, smoking status, and blood sugar.',
          iconName: 'Activity',
          highlight: false,
        },
        {
          label: 'Hub & Spoke Emergency Hospital Network',
          description: 'Linking community health centers and spoke hospitals to major referral hubs (like Ramaiah and Suguna) for coordinated rapid cardiac and stroke triage.',
          iconName: 'Building',
          highlight: false,
        },
        {
          label: 'Universal 108 Emergency Access',
          description: 'Ensuring every household member knows to dial 108 immediately when an adult or elderly relative collapses or shows heart attack / stroke signs.',
          iconName: 'PhoneCall',
          highlight: true,
        },
      ],
      notes: [
        'School students are the most powerful ambassadors for public health, bridging the gap between clinical knowledge and everyday home habits.',
        'Early family conversations about blood pressure and healthy eating prevent hundreds of future cardiovascular crises.'
      ],
    },
    firstAid: {
      title: 'Community Action & Family Health Plan',
      subtitle: 'Practical outreach assignments to maximize community impact.',
      type: 'stepByStep',
      items: [
        {
          label: '1. Hold a Family Health Conversation',
          description: 'Sit down with parents, siblings, or grandparents. Ask if anyone in the family has high blood pressure, diabetes, or has experienced heart disease.',
          iconName: 'Users',
          highlight: false,
        },
        {
          label: '2. Teach the F-A-S-T Stroke Mnemonic',
          description: 'Explain Face drooping, Arm weakness, Speech difficulty, and Time to call 108 so all family members can spot a stroke instantly.',
          iconName: 'Brain',
          highlight: true,
        },
        {
          label: '3. Demonstrate Hands-Only CPR Position',
          description: 'Show where hands go on the center of the breastbone, how to lock elbows, push at least 2 inches deep, and keep a tempo of 100 beats per minute.',
          iconName: 'Zap',
          highlight: true,
        },
        {
          label: '4. Encourage Parents to Check Blood Pressure',
          description: 'Encourage adults over age 30 to undergo routine blood pressure and blood glucose screenings at the local clinic.',
          iconName: 'CheckSquare',
          highlight: false,
        },
      ],
      notes: [
        'Record your conversations and share feedback with your teachers to build collective awareness.',
        'Knowledge saves lives: bystander confidence transforms ordinary students into real lifesavers!'
      ],
    },
    questions: [], // Module 10 has no pre/post test in the HRI Schools Module
  },
];
