import React from 'react';
import styles from './ChatApp.module.css';

const ChatApp = ({ data }) => {
    const year = data?.year || '2017'; // Default to 2017

    const chatHistory = {
        '2017': [
            { sender: 'them', text: 'Who are you?' },
            { sender: 'me', text: 'Noah Joseph Kang' },
            { sender: 'them', text: 'How old are you?' },
            { sender: 'me', text: '9 years old' },
            { sender: 'them', text: 'Where are you currently residing?' },
            { sender: 'me', text: 'We live in Snellville Georgia' },
            { sender: 'them', text: 'What is your favorite hobby?' },
            { sender: 'me', text: 'I like to play with my model soldiers' },
            { sender: 'them', text: 'What is your biggest aspiration?' },
            { sender: 'me', text: 'I want to be a weapons engineer to design and build guns. or I want to become a general in the army' },
            { sender: 'them', text: 'Who is one new person you met this year?' },
            { sender: 'me', text: 'I met one of my classmates named Loc. We play outside during recess.' },
            { sender: 'them', text: 'What is the worst thing that happened this year?' },
            { sender: 'me', text: 'We moved from Chicago to Georgia' },
            { sender: 'them', text: 'What do you look forward to this year?' },
            { sender: 'me', text: 'I am excited to do homeschooling next year' },
            { sender: 'them', text: 'What is something you regret?' },
            { sender: 'me', text: 'I wish I was better at reading comprehension and math.' },
        ],
        '2023': [
            { sender: 'them', text: 'Who are you?' },
            { sender: 'me', text: 'My name is Noah Kang.' },
            { sender: 'them', text: 'How old are you?' },
            { sender: 'me', text: 'I\'m 15 years old.' },
            { sender: 'them', text: 'Where are you currently residing?' },
            { sender: 'me', text: 'We live in Monrovia, Maryland.' },
            { sender: 'them', text: 'What is your favorite hobby?' },
            { sender: 'me', text: 'I like to play video games. I really like Roblox.' },
            { sender: 'them', text: 'What is your biggest aspiration?' },
            { sender: 'me', text: 'I want to go to Harvard or the University of Pennsylvania and study finance and become a financial manager.' },
            { sender: 'them', text: 'Who is one new person you met this year?' },
            { sender: 'me', text: 'My brother and I joined our school\'s Robotics Club. We\'re a part of the First Robotics Competition, and we are in Team 686. Because I work on programming, I met Michael Sims who is the lead student in programming.' },
            { sender: 'them', text: 'What is the worst thing that happened this year?' },
            { sender: 'me', text: 'We moved from Georgia to Maryland :/ plus COVID' },
            { sender: 'them', text: 'What do you look forward to this year?' },
            { sender: 'me', text: 'For my Robotics team, I am really excited to get better at Java and move into the hardware team to actually build the robot.' },
            { sender: 'them', text: 'What is something you regret?' },
            { sender: 'me', text: 'I wish I played less video games and studied more..' },
        ],
        '2025': [
            { sender: 'them', text: 'Who are you?' },
            { sender: 'me', text: 'I\'m Noah Kang.' },
            { sender: 'them', text: 'How old are you?' },
            { sender: 'me', text: 'I am 18 years old.' },
            { sender: 'them', text: 'Where are you currently residing?' },
            { sender: 'me', text: 'I now live in Urbana, Illinois, but my home residence is in Palatine, Illinois.' },
            { sender: 'them', text: 'What is your favorite hobby?' },
            { sender: 'me', text: 'I still like to play video games here and there, being Minecraft and CounterStrike. However, I like watching movies more these days.' },
            { sender: 'them', text: 'And your favorite is?' },
            { sender: 'me', text: 'It\'s a Chinese movie, Big World (2024). https://www.youtube.com/watch?v=yu1lkpYTaYM' },
            { sender: 'them', text: 'What is your biggest aspiration?' },
            { sender: 'me', text: 'I would love to be a quantitative trader at a firm like HRT or Jane Street, although I doubt that I\'m smart enough. Regardless, I\'m trying to get into big tech for software engineering and see where that takes me.' },
            { sender: 'them', text: 'Who is one new person you met this year?' },
            { sender: 'me', text: 'This year I moved into Koinonia, a PCH at UIUC. I met Alex. I like to hang out with him because he has a "refined" sense of humor and likes to pull shenanigans.' },
            { sender: 'them', text: 'What is the worst thing that happened this year?' },
            { sender: 'me', text: 'Moving from Maryland to Illinois sucked, but the worst thing that happened was me getting rejected from UChicago, my dream school.' },
            { sender: 'them', text: 'What do you look forward to this year?' },
            { sender: 'me', text: 'I want to meet new people.' },
            { sender: 'them', text: 'What is something you regret?' },
            { sender: 'me', text: 'I wish I slacked off less and studied more..' },
        ]
    };

    const messages = chatHistory[year] || chatHistory['2017'];

    return (
        <div className={styles.chatContainer}>
            <div className={styles.header}>
                <div className={styles.contactName}>Unknown Sender ({year})</div>
            </div>
            <div className={styles.messageList}>
                {messages.map((msg, index) => (
                    <div key={index} className={`${styles.messageRow} ${msg.sender === 'me' ? styles.myRow : styles.theirRow}`}>
                        <div className={`${styles.bubble} ${msg.sender === 'me' ? styles.myBubble : styles.theirBubble}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatApp;
