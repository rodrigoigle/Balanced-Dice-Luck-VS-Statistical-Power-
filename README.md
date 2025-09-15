# Balanced-Dice-Luck-VS-Statistical-Power-
Exploring probability and statistics through a custom dice-rolling simulator
# Dice Probability Simulator 🎲📊

This project is an **exploratory study of probability and statistics** through a custom dice-rolling simulator.  

Unlike a traditional dice roll (pure randomness), this simulator produces many rolls in the background and only presents outcomes when the **expected distribution of dice sums is reinforced**.  

This means:  
- Each individual match or session still “feels random.”  
- Over time, results converge toward the **theoretical distribution of two dice sums** — lessening the role of luck and highlighting underlying statistical principles.  

---

## 🔍 What this demonstrates
- **Randomness vs. Balance**: Even with chance, repeated trials reveal predictable patterns.  
- **Probability in Action**: The sum of two dice doesn’t follow a flat distribution — some outcomes (like 7) are inherently more common.  
- **Statistical Smoothing**: By buffering many unseen rolls in the background, the simulator enforces a distribution closer to probability theory, while still presenting results that feel random.  

---

## ⚙️ How it works
- Two dice are rolled **repeatedly in the background**.  
- Each possible sum (2–12) has a counter that tracks how often it appears.  
- Only when a sum has reached its threshold does the simulator **reveal the outcome** to the user.  
- The counter then resets, and the process continues.  

This creates the effect of “random results” that are statistically balanced in the long run.  

---

## 📊 Statistical Insight
- Sums near **7** appear more often because there are more combinations to reach them.  
- Rare sums like **2** or **12** still appear, but in the correct proportion.  
- This is a hands-on demonstration of the **law of large numbers** — randomness evens out into expectation when observed at scale.  

---

## ▶️ Running the Simulator
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/dice-probability-simulator.git
