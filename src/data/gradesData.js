export const gradesData = {
    '10th': {
        title: 'Class 10th Mastery',
        desc: 'Comprehensive board exam preparation covering Science, Maths, and Social Studies.',
        resources: {
            notes: [
                { id: '10n1', title: 'Chapter 1: Chemical Reactions and Equations', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '10n2', title: 'Chapter 2: Acids, Bases and Salts', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '10n3', title: 'Chapter 3: Life Processes - Nutrition', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '10n4', title: 'Chapter 4: Quadratic Equations Masterclass', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '10n5', title: 'Chapter 5: Rise of Nationalism in Europe', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' }
            ],
            books: [
                { id: '10b1', title: 'NCERT Science Class 10', type: 'Book', category: 'Standard' },
                { id: '10b2', title: 'Mathematics for Class 10 by R.D. Sharma', type: 'Book', category: 'Reference' },
                { id: '10b3', title: 'All In One Social Science', type: 'Book', category: 'Guide' }
            ],
            videos: [
                { id: '10v1', title: 'Introduction to Light Reflection', duration: '15:20', status: 'Available' },
                { id: '10v2', title: 'Chemical Bond Foundations', duration: '22:10', status: 'Available' }
            ]
        }
    },
    '11th': {
        title: 'Class 11th Foundation',
        desc: 'Building strong foundations for competitive exams in Physics, Chemistry, and Mathematics.',
        resources: {
            notes: [
                { id: '11n1', title: 'Chapter 1: Units and Measurements', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '11n2', title: 'Chapter 2: Some Basic Concepts of Chemistry', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '11n3', title: 'Chapter 3: Sets and Their Operations', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '11n4', title: 'Chapter 4: Kinematics - Motion in 1D', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '11n5', title: 'Chapter 5: Biological Classification', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' }
            ],
            books: [
                { id: '11b1', title: 'Concepts of Physics by H.C. Verma', type: 'Book', category: 'Recommended' },
                { id: '11b2', title: 'Modern ABC of Chemistry', type: 'Book', category: 'Reference' },
                { id: '11b3', title: 'NCERT Mathematics Class 11', type: 'Book', category: 'Standard' }
            ],
            videos: [
                { id: '11v1', title: 'Vector Analysis Basics', duration: '18:45', status: 'Available' }
            ]
        }
    },
    '12th': {
        title: 'Class 12th Advanced',
        desc: 'Mastering advanced concepts for final board exams and future academic pursuits.',
        resources: {
            notes: [
                { id: '12n1', title: 'Chapter 1: Reproduction in Organisms', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '12n2', title: 'Chapter 2: Electrostatics and Capacitance', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '12n3', title: 'Chapter 3: The Solid State Chemistry', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '12n4', title: 'Chapter 4: Relations and Functions II', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: '12n5', title: 'Chapter 5: Molecular Basis of Inheritance', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' }
            ],
            books: [
                { id: '12b1', title: 'Biology Vol. 1 by Trueman', type: 'Book', category: 'Highly Recommended' },
                { id: '12b2', title: 'Physics for Class 12 by S.L. Arora', type: 'Book', category: 'Reference' }
            ],
            videos: [
                { id: '12v1', title: 'Gauss Law Applications', duration: '25:10', status: 'Available' }
            ]
        }
    },
    'neet': {
        title: 'NEET Excellence',
        desc: 'Specialized medical entrance coaching with deep focus on Biology, Physics, and Chemistry.',
        resources: {
            notes: [
                { id: 'neetn1', title: 'High-Yield Chapter 1: The Living World', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'neetn2', title: 'High-Yield Chapter 2: Cell Cycle and Division', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'neetn3', title: 'High-Yield Chapter 3: Chemical Bonding NEET Focus', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'neetn4', title: 'Chapter 4: Human Physiology Summary', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'neetn5', title: 'Chapter 5: Genetics Formula Sheet', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' }
            ],
            books: [
                { id: 'neetb1', title: 'MTG Objective NCERT at your Fingertips', type: 'Book', category: 'Practice' },
                { id: 'neetb2', title: 'Biology NEET Guide by Arihant', type: 'Book', category: 'Guide' }
            ],
            videos: [
                { id: 'neetv1', title: 'Plant Kingdom Summary', duration: '45:00', status: 'Available' }
            ]
        }
    },
    'jee': {
        title: 'JEE Advanced Prep',
        desc: 'Intensive engineering entrance training for top-tier technical institutions.',
        resources: {
            notes: [
                { id: 'jeen1', title: 'Module 1: Advanced Complex Numbers', type: 'Quick Revision', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'jeen2', title: 'Module 2: Newton\'s Laws and Friction', type: 'Problem Set', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'jeen3', title: 'Module 3: Chemical Thermodynamics', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'jeen4', title: 'Module 4: Limits and Continuity Master', type: 'Cheat Sheet', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'jeen5', title: 'Module 5: Organic Reaction Mechanisms I', type: 'Solution Set', author: 'EterniEdu Team', copyright: '© EterniEdu Original' }
            ],
            books: [
                { id: 'jeeb1', title: 'Cengage Mathematics Series', type: 'Book', category: 'Reference' },
                { id: 'jeeb2', title: 'Organic Chemistry by M.S. Chauhan', type: 'Book', category: 'Practice' }
            ],
            videos: [
                { id: 'jeev1', title: 'Advanced Integration Techniques', duration: '35:20', status: 'Available' }
            ]
        }
    },
    'cet': {
        title: 'CET Success Path',
        desc: 'Focused preparation for state-level common entrance tests and public service bases.',
        resources: {
            notes: [
                { id: 'cetn1', title: 'Unit 1: Mathematical Logic & Matrices', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'cetn2', title: 'Unit 2: Circular Motion and Gravitation', type: 'Quick Ref', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'cetn3', title: 'Unit 3: Solutions and Colligative Properties', type: 'Mock', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'cetn4', title: 'Unit 4: Coordination Compounds', type: 'Note', author: 'EterniEdu Team', copyright: '© EterniEdu Original' }
            ],
            books: [
                { id: 'cetb1', title: 'Marvel Publications CET Guide', type: 'Book', category: 'Guide' },
                { id: 'cetb2', title: 'Target Publications MHT-CET', type: 'Book', category: 'Standard' }
            ],
            videos: []
        }
    },
    'programming': {
        title: 'Programming Mastery',
        desc: 'Master the art of coding and software development with hands-on projects.',
        resources: {
            notes: [
                { id: 'progn1', title: 'Chapter 1: JavaScript ES6+ Fundamentals', type: 'Code Guide', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'progn2', title: 'Chapter 2: Component Architecture with React', type: 'Tutorial', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'progn3', title: 'Chapter 3: Node.js Express Server Setup', type: 'Guide', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'progn4', title: 'Chapter 4: Database Modeling with MongoDB', type: 'Cheat Sheet', author: 'EterniEdu Team', copyright: '© EterniEdu Original' },
                { id: 'progn5', title: 'Chapter 5: Deployment and Vercel Workflow', type: 'Quick Intro', author: 'EterniEdu Team', copyright: '© EterniEdu Original' }
            ],
            books: [
                { id: 'progb1', title: 'Eloquent JavaScript', type: 'Free eBook', category: 'Resource' },
                { id: 'progb2', title: 'You Don\'t Know JS Yet', type: 'Series', category: 'Highly Recommended' }
            ],
            videos: [
                { id: 'progv1', title: 'Real-world React Projects', duration: '1:20:00', status: 'Available' }
            ]
        }
    }
};


