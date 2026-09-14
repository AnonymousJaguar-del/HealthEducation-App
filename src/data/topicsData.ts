import { TopicContent } from '../types';

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
    preTestQuestions: [
      {
        id: 'ha-pre1',
        question: 'How many chambers does the human heart have?',
        options: ['Six', 'Four', 'Five', 'Three'],
        correctAnswerIndex: 1,
        explanation: 'The human heart has four distinct chambers: the right atrium, right ventricle, left atrium, and left ventricle.'
      },
      {
        id: 'ha-pre2',
        question: 'Your heart is anatomically classified as a/an:',
        options: [
          'Center for emotional thoughts and feelings',
          'Artery',
          'Specialized muscular organ',
          'Vein'
        ],
        correctAnswerIndex: 2,
        explanation: 'The heart is a specialized muscular organ made of involuntary cardiac muscle tissue that pumps blood continuously.'
      },
      {
        id: 'ha-pre3',
        question: 'What is the primary physiological function of your heart?',
        options: [
          'Supplies nutrition and oxygen to the entire body through blood',
          'Helps you breathe atmospheric air into lungs',
          'Helps in stomach digestion',
          'Excretes metabolic waste products out of the body'
        ],
        correctAnswerIndex: 0,
        explanation: 'The heart acts as a biological pump, circulating oxygen-rich and nutrient-filled blood to every organ and tissue in the body.'
      },
      {
        id: 'ha-pre4',
        question: 'How many times does an average healthy heart beat in one minute at rest?',
        options: ['20 bpm', '140 bpm', '40 bpm', '72 to 80 bpm'],
        correctAnswerIndex: 3,
        explanation: 'A normal resting heart rate for healthy individuals is typically between 60 to 100 beats per minute, commonly averaging around 72 to 80 bpm.'
      },
      {
        id: 'ha-pre5',
        question: 'How does the heart muscle itself receive oxygen and nutrients?',
        options: [
          'From the stomach and digestive intestines',
          'From small coronary arteries branching on the outside of the heart',
          'Directly from the blood pooled inside its own chambers',
          'Directly from cranial blood vessels in the brain'
        ],
        correctAnswerIndex: 1,
        explanation: 'The myocardium (heart muscle) is nourished by coronary arteries that branch off the aorta and travel along the outer surface of the heart.'
      },
    ],
    postTestQuestions: [
      {
        id: 'ha-post1',
        question: 'Where is the human heart located inside the body?',
        options: [
          'In the lower abdomen on the right side',
          'Inside the right lung cavity',
          'At the base of the spine',
          'Behind the breastbone (sternum), slightly tilted to the left side of the chest'
        ],
        correctAnswerIndex: 3,
        explanation: 'The heart lies in the thoracic cavity behind the sternum, tilted slightly toward the left side of the chest.'
      },
      {
        id: 'ha-post2',
        question: 'True or False: The heart is an involuntary muscle that continues to beat without conscious effort.',
        options: ['True', 'False', 'Only during daytime hours', 'Only while sleeping'],
        correctAnswerIndex: 0,
        explanation: 'The heart is composed of involuntary cardiac muscle regulated by its own intrinsic electrical conduction system.'
      },
      {
        id: 'ha-post3',
        question: 'What occurs when a coronary artery becomes blocked and blood supply to the heart muscle is cut off?',
        options: [
          'The heart enters a dormant hibernation state',
          'The stomach produces excess gastric acid',
          'The heart muscle suffers oxygen deprivation leading to tissue damage (Heart Attack)',
          'The lungs immediately and permanently collapse'
        ],
        correctAnswerIndex: 2,
        explanation: 'Blockage of a coronary artery deprives heart muscle cells of vital oxygen, resulting in acute myocardial ischemia and a heart attack.'
      },
      {
        id: 'ha-post4',
        question: 'Which anatomical location is most commonly used to check your resting pulse by hand?',
        options: [
          'The kneecap (patellar pulse)',
          'The radial artery on the wrist below the thumb base',
          'The elbow joint (cubital fossa)',
          'The center of the collarbone'
        ],
        correctAnswerIndex: 1,
        explanation: 'The radial artery at the wrist (at the base of the thumb) is the most standard, accessible location for checking resting pulse.'
      },
      {
        id: 'ha-post5',
        question: 'What is the vital role of the heart valves?',
        options: [
          'To prevent blood from flowing backward between chambers and vessels',
          'To cool the temperature of circulating blood',
          'To filter impurities and bacteria out of the blood',
          'To produce new red blood cells'
        ],
        correctAnswerIndex: 0,
        explanation: 'The heart valves act as one-way gates that ensure blood flows forward through the chambers in an orderly, unidirectional cycle.'
      },
    ],
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
    preTestQuestions: [
      {
        id: 'cp-pre1',
        question: 'Which of the following are recognized risk factors for a heart attack?',
        options: [
          'High blood pressure (hypertension)',
          'Lack of regular physical exercise',
          'Tobacco smoking and diabetes mellitus',
          'All of the above'
        ],
        correctAnswerIndex: 3,
        explanation: 'High blood pressure, tobacco smoking, physical inactivity, diabetes, and elevated cholesterol are all major heart attack risk factors.'
      },
      {
        id: 'cp-pre2',
        question: 'Can a person experiencing an acute heart attack suddenly develop sudden cardiac arrest?',
        options: [
          'Only in pediatric cases under 5 years old',
          'True — electrical disruption can cause the heart to abruptly stop pumping',
          'False — heart attacks and cardiac arrest never occur together',
          'Only after two to three weeks of recovery'
        ],
        correctAnswerIndex: 1,
        explanation: 'Heart attacks disrupt cardiac blood flow and can trigger malignant electrical rhythms (like ventricular fibrillation), causing sudden cardiac arrest.'
      },
      {
        id: 'cp-pre3',
        question: 'A patient experiencing a heart attack can present with which of the following signs?',
        options: [
          'Central crushing chest pain, cold sweating, or left arm radiation',
          'Severe pain confined only to the fingernails',
          'High fever and sneezing',
          'Sudden earache'
        ],
        correctAnswerIndex: 0,
        explanation: 'Heart attacks commonly present with central chest heaviness radiating to the left arm or jaw, accompanied by diaphoresis and dizziness.'
      },
      {
        id: 'cp-pre4',
        question: 'What is the immediate priority action when you identify someone who may be having a heart attack?',
        options: [
          'Give them hot tea and wait an hour',
          'Instruct them to take a brisk walk to clear their lungs',
          'Call an ambulance (108) and arrange immediate hospital transport',
          'Give home remedies or antacids and observe'
        ],
        correctAnswerIndex: 2,
        explanation: 'Time is Muscle! Immediately call 108 for emergency ambulance transport to an equipped hospital capable of coronary intervention.'
      },
      {
        id: 'cp-pre5',
        question: 'What is the fundamental difference between angina and a heart attack?',
        options: [
          'Angina affects the legs while a heart attack affects the stomach',
          'Angina is temporary reduced blood flow relieved by rest; a heart attack is prolonged blockage causing heart muscle injury',
          'Angina is caused by cold weather while a heart attack is an infection',
          'There is no difference between them'
        ],
        correctAnswerIndex: 1,
        explanation: 'Angina is transient myocardial ischemia that eases with rest; a heart attack (myocardial infarction) causes irreversible muscle necrosis.'
      },
    ],
    postTestQuestions: [
      {
        id: 'cp-post1',
        question: 'Which of the following is a classic warning symptom of a heart attack that does NOT involve the center of the chest?',
        options: [
          'Pain or heaviness radiating down the left arm, shoulder, or jaw',
          'Pain localized strictly to the heels',
          'A runny nose and watery eyes',
          'Sudden itching on both elbows'
        ],
        correctAnswerIndex: 0,
        explanation: 'Radiation of discomfort to the left arm, shoulder, jaw, neck, or back is a hallmark non-chest warning sign of cardiac ischemia.'
      },
      {
        id: 'cp-post2',
        question: 'Why is it dangerous to assume severe chest discomfort is simple "gastritis" and delay seeking care?',
        options: [
          'Gastritis medicines cure heart disease',
          'Ambulances only handle digestive issues',
          'Delayed medical care leads to irreversible heart muscle death and higher mortality',
          'Gastritis always turns into influenza'
        ],
        correctAnswerIndex: 2,
        explanation: 'Mistaking heart attack symptoms for acidity/gas is one of the leading causes of pre-hospital delay and preventable deaths.'
      },
      {
        id: 'cp-post3',
        question: 'What posture should a conscious person suspected of having a heart attack be placed in while awaiting 108?',
        options: [
          'Standing up and pacing the hallway',
          'Lying completely flat face down on their stomach',
          'Hanging their head upside down',
          'Seated comfortably with their back supported (half-sitting posture)'
        ],
        correctAnswerIndex: 3,
        explanation: 'A comfortable seated position with the back supported minimizes the workload on the heart and makes breathing easier.'
      },
      {
        id: 'cp-post4',
        question: 'Which groups of individuals are most likely to experience "atypical" heart attack symptoms without severe chest pain?',
        options: [
          'Athletic teenagers only',
          'Women, elderly individuals, and people with diabetes',
          'Only deep-sea divers',
          'No one; all heart attacks feel exactly identical'
        ],
        correctAnswerIndex: 1,
        explanation: 'Women, diabetics, and the elderly often present atypically with shortness of breath, profound fatigue, nausea, or dizziness without crushing chest pain.'
      },
      {
        id: 'cp-post5',
        question: 'In India, what is the dedicated toll-free emergency phone number to call for ambulance medical dispatch?',
        options: [
          '108',
          '100',
          '101',
          '1091'
        ],
        correctAnswerIndex: 0,
        explanation: '108 is the dedicated emergency toll-free telephone number for medical emergencies and ambulance dispatch in India.'
      },
    ],
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
    preTestQuestions: [
      {
        id: 'cpr-pre1',
        question: 'What is your immediate next action as a bystander after checking a collapsed victim and finding them unresponsive?',
        options: [
          'Take the victim home in your personal vehicle',
          'Wait 10 minutes to see if they wake up',
          'Shout loudly for help and call 108',
          'Leave the scene immediately'
        ],
        correctAnswerIndex: 2,
        explanation: 'Once you confirm unresponsiveness, immediately shout for help and ensure emergency medical services (108) are called.'
      },
      {
        id: 'cpr-pre2',
        question: 'If you find an unresponsive victim has abnormal breathing or agonal gasping, what is your next action?',
        options: [
          'Give water to clear their throat',
          'Wait until help arrives since the victim is still taking occasional gasps',
          'Give rescue breaths only',
          'Call 108, ask for an AED, and start chest compressions immediately'
        ],
        correctAnswerIndex: 3,
        explanation: 'Agonal gasping is a dying reflex and indicates cardiac arrest. Immediately call 108, request an AED, and start chest compressions.'
      },
      {
        id: 'cpr-pre3',
        question: 'If you are caring for an unresponsive victim and another bystander arrives, what should you instruct them to do?',
        options: [
          'Go locate an Automated External Defibrillator (AED) and bring it back immediately',
          'Film a video of the scene',
          'Give the patient a glass of cold water',
          'Call the patient’s school or employer'
        ],
        correctAnswerIndex: 0,
        explanation: 'Directing a second bystander to fetch an AED while you maintain continuous chest compressions significantly increases survival chances.'
      },
      {
        id: 'cpr-pre4',
        question: 'What is the recommended required compression depth for an adult during bystander chest compressions?',
        options: [
          '0.5 inches (1 cm)',
          'At least 2 inches (5 cm)',
          '1 inch (2.5 cm)',
          '3.5 inches (9 cm)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Compressing at least 2 inches (5 cm) deep is required to squeeze the heart against the spine and generate systemic blood flow.'
      },
      {
        id: 'cpr-pre5',
        question: 'What is the recommended rate of chest compressions for bystanders?',
        options: [
          'At least 40 in one minute',
          'At least 160 in one minute',
          'At least 100 compressions in one minute (100–120/min)',
          '50 compressions in two minutes'
        ],
        correctAnswerIndex: 2,
        explanation: 'Compressions should be delivered at a rate of 100 to 120 beats per minute (to the beat of the song "Stayin\' Alive").'
      },
    ],
    postTestQuestions: [
      {
        id: 'cpr-post1',
        question: 'Which sequence best describes the correct steps upon finding a collapsed victim?',
        options: [
          'Start chest compressions before checking scene safety',
          'Check scene safety, check responsiveness, call for help (108), check breathing',
          'Call 108 and walk away',
          'Give two breaths and then check wrist pulse'
        ],
        correctAnswerIndex: 1,
        explanation: 'Always ensure scene safety first, check for responsiveness, call for emergency help (108), and check for absence of normal breathing.'
      },
      {
        id: 'cpr-post2',
        question: 'If an AED is NOT available at the scene, what is your next step as a bystander?',
        options: [
          'Stop chest compressions after 2 minutes',
          'Leave the victim alone to search the city for an AED',
          'Give up and wait',
          'Continue hands-only chest compressions without stopping until emergency help arrives'
        ],
        correctAnswerIndex: 3,
        explanation: 'If no AED is available, continuous hands-only chest compressions keep oxygenated blood circulating to the brain until EMS takes over.'
      },
      {
        id: 'cpr-post3',
        question: 'As a bystander performing chest compressions, when will you stop compressions?',
        options: [
          'When emergency medical personnel arrive and take over, the AED prompts you, or the victim shows signs of life',
          'After exactly 5 minutes',
          'As soon as another bystander watches you',
          'After exactly 30 compressions'
        ],
        correctAnswerIndex: 0,
        explanation: 'CPR should only cease when qualified medical help takes over, an AED is analyzing/shocking, or the victim begins moving and breathing normally.'
      },
      {
        id: 'cpr-post4',
        question: 'In the 4C approach to an unresponsive victim who is not breathing, what do the 4 Cs stand for?',
        options: [
          'Cough, Cool, Care, Continue',
          'Clean, Check, Carry, Comfort',
          'Check, Call 108, Compress, Clear for AED',
          'Calm, Call, Check, Clean'
        ],
        correctAnswerIndex: 2,
        explanation: 'The HeartRescue 4C approach is: 1. Check response & breathing, 2. Call 108 & get AED, 3. Compress chest at 100/min, 4. Clear for AED.'
      },
      {
        id: 'cpr-post5',
        question: 'Why is allowing full chest recoil between compressions essential?',
        options: [
          'It allows blood to refill the heart chambers before the next compression',
          'It gives the rescuer time to rest their arms',
          'It prevents the patient from getting too warm',
          'It prevents the ribs from touching each other'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chest recoil creates negative pressure inside the chest, drawing venous blood back into the heart chambers to prepare for the next pump.'
      },
    ],
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
    preTestQuestions: [
      {
        id: 'ne-pre1',
        question: 'Which of the following dietary sources of fat is considered beneficial for heart health?',
        options: ['Butter', 'Cheese', 'Mutton tallow', 'Fish (containing Omega-3 fats)'],
        correctAnswerIndex: 3,
        explanation: 'Fish, especially cold-water varieties, is rich in omega-3 unsaturated fatty acids that reduce arterial inflammation and lower triglycerides.'
      },
      {
        id: 'ne-pre2',
        question: 'Which of the following dietary choices promotes a healthy heart?',
        options: [
          'Deep-fried packaged chips',
          'Fresh fruits and vegetables',
          'High-sugar confectioneries and sweetened sodas',
          'High-sodium processed meats'
        ],
        correctAnswerIndex: 1,
        explanation: 'Fresh fruits and vegetables are packed with dietary fiber, potassium, and antioxidants that lower blood pressure and protect vascular walls.'
      },
      {
        id: 'ne-pre3',
        question: 'How many minutes of daily physical activity are recommended to maintain cardiovascular fitness?',
        options: [
          'At least 30 to 60 minutes every day',
          'Only 2 minutes once a week',
          '5 hours continuously without rest',
          'Exercise is not recommended for heart health'
        ],
        correctAnswerIndex: 0,
        explanation: 'Medical guidelines recommend at least 30 to 60 minutes of moderate physical activity daily to maintain cardiovascular fitness.'
      },
      {
        id: 'ne-pre4',
        question: 'What happens to your pulse rate immediately after doing 20 squats or jogging?',
        options: [
          'It drops to zero',
          'It remains completely unchanged',
          'It increases because the heart pumps faster to supply more oxygen to working muscles',
          'It stops for 5 minutes'
        ],
        correctAnswerIndex: 2,
        explanation: 'Exercise increases metabolic demand in skeletal muscle, prompting the heart to increase its stroke volume and heart rate.'
      },
      {
        id: 'ne-pre5',
        question: 'Which of the following represents an unhealthy fat that promotes coronary artery blockages?',
        options: [
          'Extra virgin olive oil',
          'Trans fats and excess saturated fats in deep-fried foods and commercial pastries',
          'Flaxseed oil',
          'Avocado oil'
        ],
        correctAnswerIndex: 1,
        explanation: 'Trans fats and high levels of saturated fats elevate LDL ("bad") cholesterol, accelerating atherosclerotic plaque formation.'
      },
    ],
    postTestQuestions: [
      {
        id: 'ne-post1',
        question: 'What positive effect does regular aerobic physical exercise have on the heart?',
        options: [
          'Causes arterial blood vessels to weaken',
          'Increases coronary arterial blockages',
          'Strengthens cardiac muscle, lowers resting blood pressure, and improves cholesterol',
          'Stops blood flow to the brain'
        ],
        correctAnswerIndex: 2,
        explanation: 'Routine aerobic exercise strengthens cardiac contractility, lowers resting heart rate, reduces blood pressure, and raises HDL cholesterol.'
      },
      {
        id: 'ne-post2',
        question: 'True or False: You can divide your daily 30-minute physical activity goal into two 15-minute sessions and still gain heart benefits.',
        options: ['True', 'False', 'Only if done at night', 'Only in freezing temperatures'],
        correctAnswerIndex: 0,
        explanation: 'Accumulating 30 minutes of physical activity in two 15-minute intervals delivers equivalent cardiovascular conditioning benefits.'
      },
      {
        id: 'ne-post3',
        question: 'What is a heart-healthy snack choice compared to fried potato chips?',
        options: [
          'Sweet carbonated sodas and pastries',
          'Deep-fried samosas',
          'Candy bars',
          'A bowl of fresh seasonal fruit or a small handful of unsalted roasted nuts'
        ],
        correctAnswerIndex: 3,
        explanation: 'Fresh fruits and unsalted nuts provide healthy fiber, vitamins, and minerals without excess sodium or damaging trans fats.'
      },
      {
        id: 'ne-post4',
        question: 'Which dietary habit contributes most directly to preventing high blood pressure (hypertension)?',
        options: [
          'Adding extra table salt to all cooked dishes',
          'Reducing daily salt (sodium) intake and staying physically active',
          'Drinking three caffeinated energy drinks daily',
          'Avoiding all physical movement'
        ],
        correctAnswerIndex: 1,
        explanation: 'Limiting sodium intake to less than 2,000 mg (about 1 teaspoon of salt) per day helps prevent and manage hypertension.'
      },
      {
        id: 'ne-post5',
        question: 'Why is plain water preferred over sugary soft drinks for everyday hydration?',
        options: [
          'It hydrates effectively without excess sugars and empty calories that cause weight gain and diabetes',
          'Water causes arterial narrowing',
          'Sugary drinks are better for heart arteries',
          'Water contains dangerous caffeine'
        ],
        correctAnswerIndex: 0,
        explanation: 'Sugary beverages contribute directly to obesity, insulin resistance, type 2 diabetes, and accelerated cardiovascular disease.'
      },
    ],
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
    preTestQuestions: [
      {
        id: 'rf-pre1',
        question: 'Which of the following are major risk factors for cardiovascular disease?',
        options: [
          'Drinking pure water daily',
          'Getting 8 hours of sleep',
          'Tobacco smoking, hypertension, and uncontrolled diabetes',
          'Eating leafy vegetables'
        ],
        correctAnswerIndex: 2,
        explanation: 'Tobacco smoking, hypertension, diabetes mellitus, high cholesterol, and obesity are the leading modifiable risk factors for CVD.'
      },
      {
        id: 'rf-pre2',
        question: 'Tobacco smoking is a direct, proven cause of which of the following life-threatening conditions?',
        options: [
          'Only minor skin rashes',
          'Short-term hiccups',
          'Temporary ear fullness',
          'Heart attack, stroke, and lung cancer'
        ],
        correctAnswerIndex: 3,
        explanation: 'Tobacco contains toxins that damage blood vessels, accelerate clotting, and cause heart attacks, strokes, and malignancies like lung cancer.'
      },
      {
        id: 'rf-pre3',
        question: 'Which of the following lifestyle habits is beneficial for heart health?',
        options: [
          'Being physically active on a regular basis',
          'Smoking tobacco occasionally',
          'Consuming foods high in trans fats',
          'Ignoring elevated blood pressure readings'
        ],
        correctAnswerIndex: 0,
        explanation: 'Consistent physical activity conditions the cardiovascular system, improves lipid profiles, and lowers resting blood pressure.'
      },
      {
        id: 'rf-pre4',
        question: 'Why is high blood pressure frequently referred to as a "silent killer"?',
        options: [
          'It makes a loud whistling noise in the lungs',
          'It often causes no noticeable symptoms until triggering a heart attack or stroke',
          'It only affects individuals while asleep',
          'It cures itself without any medical treatment'
        ],
        correctAnswerIndex: 1,
        explanation: 'High blood pressure rarely causes symptoms early on, silently damaging arteries and organs for years if not screened.'
      },
      {
        id: 'rf-pre5',
        question: 'What harmful effect does uncontrolled high blood sugar (diabetes) have on the cardiovascular system?',
        options: [
          'It dissolves arterial plaques',
          'It strengthens coronary artery walls',
          'It damages arterial linings (endothelium) and accelerates plaque accumulation',
          'It has zero effect on blood vessels'
        ],
        correctAnswerIndex: 2,
        explanation: 'Chronic hyperglycemia damages blood vessel walls, promotes inflammation, and dramatically accelerates coronary plaque buildup.'
      },
    ],
    postTestQuestions: [
      {
        id: 'rf-post1',
        question: 'Which of the following is one of the American Heart Association’s "Life’s Simple 7" steps?',
        options: [
          'Increase intake of sugar-sweetened beverages',
          'Sleep only 3 hours per night',
          'Avoid all fresh vegetables',
          'Stop smoking and avoid all tobacco exposure'
        ],
        correctAnswerIndex: 3,
        explanation: 'AHA Life’s Simple 7 comprises: manage BP, control cholesterol, reduce blood sugar, get active, eat better, maintain healthy weight, and stop smoking.'
      },
      {
        id: 'rf-post2',
        question: 'How does high blood cholesterol increase the danger of coronary artery disease?',
        options: [
          'Excess LDL cholesterol deposits inside arterial walls, forming plaques that narrow blood flow',
          'It makes the heart pump too slowly',
          'It thins the blood excessively',
          'It prevents muscle fatigue'
        ],
        correctAnswerIndex: 0,
        explanation: 'Elevated LDL cholesterol leads to fatty streaks and atherosclerotic plaques in arterial walls, narrowing coronary lumen diameter.'
      },
      {
        id: 'rf-post3',
        question: 'Which contributing factor can trigger sudden spikes in blood pressure and elevated stress hormones (adrenaline and cortisol)?',
        options: [
          'Drinking pure water',
          'Chronic psychological stress',
          'Eating fresh vegetables',
          'Getting 8 hours of restful sleep'
        ],
        correctAnswerIndex: 1,
        explanation: 'Chronic stress activates the sympathetic nervous system, releasing catecholamines that spike heart rate and blood pressure.'
      },
      {
        id: 'rf-post4',
        question: 'True or False: Lifestyle improvements such as a healthy diet and daily exercise can significantly lower cardiovascular risk even if a family history exists.',
        options: [
          'False',
          'Only for doctors',
          'True',
          'Only in hospital settings'
        ],
        correctAnswerIndex: 2,
        explanation: 'While genetics influence baseline risk, adopting healthy lifestyle habits can prevent or substantially delay cardiovascular disease.'
      },
      {
        id: 'rf-post5',
        question: 'What is the most effective recommendation for an adult family member who has elevated blood pressure?',
        options: [
          'Ignore it unless they experience severe chest pain',
          'Have their blood pressure screened regularly and adopt a low-sodium, active lifestyle',
          'Take random over-the-counter painkillers',
          'Stop drinking all fluids'
        ],
        correctAnswerIndex: 1,
        explanation: 'Regular medical monitoring, reducing sodium intake, engaging in aerobic exercise, and taking prescribed medication keep blood pressure controlled.'
      },
    ],
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
    preTestQuestions: [
      {
        id: 'st-pre1',
        question: 'What is a stroke?',
        options: [
          'A loss of blood flow to the brain due to a clot or hemorrhage cutting off vital oxygen',
          'A muscular spasm in the shoulder',
          'An infection in the stomach',
          'A temporary ear blockage'
        ],
        correctAnswerIndex: 0,
        explanation: 'A stroke is a cerebrovascular event caused either by an arterial clot (ischemic stroke) or a blood vessel rupture (hemorrhagic stroke).'
      },
      {
        id: 'st-pre2',
        question: 'What are major risk factors for having a stroke?',
        options: [
          'Walking 30 minutes daily',
          'Drinking plenty of water',
          'Eating fresh fruits',
          'High blood pressure (hypertension), tobacco smoking, and diabetes'
        ],
        correctAnswerIndex: 3,
        explanation: 'Hypertension is the single most critical modifiable stroke risk factor, alongside diabetes, tobacco smoking, and high cholesterol.'
      },
      {
        id: 'st-pre3',
        question: 'A patient experiencing an acute stroke can present with which of the following signs?',
        options: [
          'Sudden knee bruise only',
          'Sudden weakness or numbness in a limb, slurred speech, or facial drooping',
          'High fever and coughing',
          'Itching on both feet'
        ],
        correctAnswerIndex: 1,
        explanation: 'Sudden weakness on one side of the body, speech difficulty, and facial droop are classic hallmark signs of acute stroke.'
      },
      {
        id: 'st-pre4',
        question: 'What should you do immediately when you identify someone who may be having a stroke?',
        options: [
          'Give them a glass of cold water to drink',
          'Perform vigorous chest compressions',
          'Call 108 for an ambulance and arrange emergency hospital transport immediately',
          'Let them rest and wait until tomorrow'
        ],
        correctAnswerIndex: 2,
        explanation: 'Call 108 immediately. Stroke treatments (like clot-dissolving thrombolysis) must be administered within a strict time window to save brain tissue.'
      },
      {
        id: 'st-pre5',
        question: 'In the F-A-S-T stroke recognition mnemonic, what does the letter "F" stand for?',
        options: [
          'Fast Heartbeat',
          'Face Drooping — check if one side of the face droops when smiling',
          'Fever Check',
          'Foot Swelling'
        ],
        correctAnswerIndex: 1,
        explanation: '"F" stands for Face Drooping. Ask the person to smile; look for an uneven, lopsided mouth or drooping eyelid.'
      },
    ],
    postTestQuestions: [
      {
        id: 'st-post1',
        question: 'In the F-A-S-T mnemonic, what does the letter "A" stand for?',
        options: [
          'Appetite Loss',
          'Ankle Sprain',
          'Arm Weakness — check if one arm drifts downward when raised',
          'Alertness Score'
        ],
        correctAnswerIndex: 2,
        explanation: '"A" stands for Arm Weakness. Ask the person to raise both arms out in front; check if one arm drifts down.'
      },
      {
        id: 'st-post2',
        question: 'In the F-A-S-T mnemonic, what does the letter "S" stand for?',
        options: [
          'Speech Problem — check for slurred speech or difficulty repeating words',
          'Sweating Profusely',
          'Stomach Cramps',
          'Shivering'
        ],
        correctAnswerIndex: 0,
        explanation: '"S" stands for Speech Difficulty. Stroke can cause dysarthria (slurred speech) or aphasia (inability to express or understand words).'
      },
      {
        id: 'st-post3',
        question: 'In the F-A-S-T mnemonic, what does the letter "T" stand for?',
        options: [
          'Take body temperature',
          'Try administering oral aspirin',
          'Take a nap',
          'Time to call 108 immediately and record symptom onset time'
        ],
        correctAnswerIndex: 3,
        explanation: '"T" stands for Time to call 108 immediately. Note the exact time symptoms started, as acute interventions are strictly time-dependent.'
      },
      {
        id: 'st-post4',
        question: 'Why must you NEVER give food, water, or oral medications to a person suspected of having a stroke?',
        options: [
          'Water dilutes brain blood',
          'Stroke frequently impairs swallowing reflexes, risking fatal airway choking or aspiration',
          'Liquids make the ambulance ride bumpy',
          'Food stops the heart'
        ],
        correctAnswerIndex: 1,
        explanation: 'Dysphagia (impaired swallowing) is very common in stroke patients; giving food or water risks severe choking and fatal aspiration pneumonia.'
      },
      {
        id: 'st-post5',
        question: 'In which organ of the human body does a stroke take place?',
        options: [
          'The stomach',
          'The liver',
          'The brain',
          'The kidneys'
        ],
        correctAnswerIndex: 2,
        explanation: 'A stroke is a cerebrovascular event occurring in the brain due to disrupted blood flow.'
      },
    ],
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
    preTestQuestions: [
      {
        id: 'co-pre1',
        question: 'What is the primary mission of the HeartRescue India School Program?',
        options: [
          'To replace certified hospital doctors with school students',
          'To sell medical hardware to local schools',
          'To empower students as community champions who increase public awareness of heart attack, cardiac arrest, and stroke',
          'To conduct pharmaceutical trials'
        ],
        correctAnswerIndex: 2,
        explanation: 'The HeartRescue India School Program trains students and teachers to recognize cardiovascular emergencies, act as bystanders, and educate their families.'
      },
      {
        id: 'co-pre2',
        question: 'What is the dedicated emergency telephone number in India to dispatch an ambulance for a collapsed person?',
        options: ['108', '100', '101', '102'],
        correctAnswerIndex: 0,
        explanation: '108 is the unified emergency number in India for dispatching medical ambulances and first-response emergency services.'
      },
      {
        id: 'co-pre3',
        question: 'Why is it valuable for students to discuss cardiovascular risk factors with their parents and relatives?',
        options: [
          'Children should prescribe medications',
          'Adults may have undetected risk factors like hypertension or diabetes that can be diagnosed and treated early',
          'To test their parents’ memory',
          'It is a mandatory legal requirement'
        ],
        correctAnswerIndex: 1,
        explanation: 'Many adults live with undiagnosed hypertension or diabetes; family discussions prompt timely medical checkups and healthy lifestyle changes.'
      },
      {
        id: 'co-pre4',
        question: 'What tool is used by community healthcare programs to assess an adult’s 10-year risk of cardiovascular disease based on age, blood pressure, smoking, and blood sugar?',
        options: [
          'An online video quiz',
          'A dental examination chart',
          'A school report card',
          'WHO/ISH Cardiovascular Disease Risk Prediction Charts'
        ],
        correctAnswerIndex: 3,
        explanation: 'World Health Organization / International Society of Hypertension (WHO/ISH) risk charts predict 10-year cardiovascular risk to guide preventive therapy.'
      },
      {
        id: 'co-pre5',
        question: 'In the HeartRescue India project model, how do Hub hospitals (like Ramaiah) and Spoke hospitals collaborate?',
        options: [
          'They compete against each other for patients',
          'They form a coordinated emergency network to provide rapid triage, stabilization, ambulance transfer, and tertiary care',
          'They only exchange library books',
          'They never communicate with one another'
        ],
        correctAnswerIndex: 1,
        explanation: 'The Hub-and-Spoke model links local community facilities (spokes) with comprehensive tertiary centers (hubs) to minimize pre-hospital delays.'
      },
    ],
    postTestQuestions: [
      {
        id: 'co-post1',
        question: 'How many family members, relatives, or neighbors are students challenged to educate about heart-healthy living in their community outreach assignment?',
        options: [
          'At least 7 people',
          'Exactly 100 people',
          'None',
          'Only licensed healthcare providers'
        ],
        correctAnswerIndex: 0,
        explanation: 'The curriculum encourages each student to share the life-saving knowledge and the 7 heart-healthy steps with at least 7 people in their community.'
      },
      {
        id: 'co-post2',
        question: 'What should a student advise their family to do if someone collapses, stops responding, and is not breathing normally?',
        options: [
          'Splash cold water on their face and wait 30 minutes',
          'Give them hot tea to drink',
          'Call 108 immediately and begin continuous hands-only chest compressions in the center of the chest',
          'Leave the room and wait for someone else to find them'
        ],
        correctAnswerIndex: 2,
        explanation: 'Calling 108 and starting immediate hands-only chest compressions are the two most critical life-saving actions in sudden cardiac arrest.'
      },
      {
        id: 'co-post3',
        question: 'What vital information should you clearly give when calling 108 for an unresponsive collapsed victim?',
        options: [
          'Only your first name',
          'The victim’s favorite food',
          'The current weather forecast',
          'Your exact location/landmarks, victim responsiveness, whether they are breathing, and request an AED'
        ],
        correctAnswerIndex: 3,
        explanation: 'Providing exact location details, describing responsiveness and breathing, and requesting an AED ensure appropriate ambulance dispatch.'
      },
      {
        id: 'co-post4',
        question: 'Which of the following actions best demonstrates being an active "Agent of Change" in public health?',
        options: [
          'Keeping emergency first aid knowledge a secret',
          'Teaching family members the F-A-S-T stroke signs, CPR steps, and heart-healthy dietary choices',
          'Telling people that heart attacks only happen to elderly people',
          'Encouraging family members to avoid physical activity'
        ],
        correctAnswerIndex: 1,
        explanation: 'Sharing life-saving knowledge and preventive lifestyle habits transforms students into impactful public health ambassadors.'
      },
      {
        id: 'co-post5',
        question: 'Why is early bystander intervention in the first few minutes of cardiac arrest so vital before the ambulance arrives?',
        options: [
          'Irreversible brain damage begins within 4 to 6 minutes without blood flow; bystander CPR maintains vital oxygen circulation',
          'Ambulances do not carry medical equipment',
          'Bystanders are legally required to perform complex surgery',
          'The heart cannot be restarted once paramedics arrive'
        ],
        correctAnswerIndex: 0,
        explanation: 'Permanent brain cell injury begins within 4 to 6 minutes of circulatory arrest. Bystander CPR bridges this crucial window until advanced medical care arrives.'
      },
    ],
  },
];
