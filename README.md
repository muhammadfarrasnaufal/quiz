# UBS Quiz Adventure 🎓

A modern, Gen Z-friendly quiz application for Universitas Bani Saleh with real-time leaderboard, multiple visual themes, and responsive design.

## Features

✨ **Quiz Engine**
- 30 engaging questions
- 9 scored questions (rest are fun/personality questions)
- Real-time score calculation

🎨 **Visual Themes** (6 unique designs)
- Cyberpunk (neon, high-contrast)
- Minimal (clean, light)
- Anime (vibrant, playful)
- Luxury (elegant, premium)
- Sosmed (social media style)
- Viral (trending, eye-catching)

📱 **Responsive Design**
- Desktop mode (💻)
- Mobile mode (📱)
- Toggle between modes anytime

🏆 **Real-time Leaderboard**
- Top 5 player rankings
- Medal system (👑 🥈 🥉)
- Live polling updates every 2 seconds
- Server-backed persistence

🎉 **Animations**
- Confetti celebration on quiz completion
- Smooth screen transitions
- Leaderboard item animations
- Button effects

## Tech Stack

**Frontend:**
- HTML5
- CSS3 (custom properties, animations)
- Vanilla JavaScript (async/await, fetch API)

**Backend:**
- Python Flask 2.3.3
- Flask-CORS for cross-origin requests
- JSON file-based persistence

## Getting Started

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/muhammadfarrasnaufal/quiz.git
cd quiz
```

2. **Install Python dependencies**
```bash
pip install -r requirements.txt
```

3. **Start the Flask API server**
```bash
python server.py
```
The API will run on `http://localhost:5000`

4. **Serve the frontend**
Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx serve
```
Access the app at `http://localhost:8000`

### Environment Variables

For Vercel deployment, set these environment variables:
- `FLASK_ENV`: Set to `production`
- `ALLOWED_ORIGINS`: Comma-separated list of allowed origins (e.g., `https://your-domain.vercel.app`)

## API Endpoints

### GET `/api/health`
Returns server status
```json
{
  "success": true,
  "data": {
    "status": "running",
    "message": "UBS Quiz API is running"
  }
}
```

### GET `/api/leaderboard`
Get top 5 players sorted by score
```json
{
  "success": true,
  "data": [
    {
      "name": "Player Name",
      "score": 9,
      "timestamp": "2026-08-30T18:59:15.153789"
    }
  ],
  "total": 12
}
```

### POST `/api/score`
Submit a new score
```json
{
  "name": "Player Name",
  "score": 5
}
```

Response:
```json
{
  "success": true,
  "message": "Skor Player Name (5) berhasil disimpan!",
  "leaderboard": [...]
}
```

### POST `/api/leaderboard/reset`
Clear all leaderboard data (admin)
```json
{
  "success": true,
  "message": "Leaderboard reset successfully"
}
```

## File Structure

```
quiz/
├── index.html          # Main HTML structure
├── style.css           # Styling with 6 themes
├── script.js           # Quiz logic & API integration
├── server.py           # Flask API backend
├── requirements.txt    # Python dependencies
├── leaderboard.json    # Score persistence file
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Deployment

### Deploy to Vercel

1. **Connect your GitHub repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" → "Import Git Repository"
   - Select `muhammadfarrasnaufal/quiz`

2. **Configure environment**
   - Framework Preset: "Other"
   - Build Command: Leave empty (static files only)
   - Install Command: `pip install -r requirements.txt`

3. **Deploy**
   - Vercel will automatically deploy your app
   - Your app will be available at `https://<your-app>.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## Development Notes

- **Leaderboard Polling**: Frontend polls server every 2 seconds for updates
- **CORS**: Enabled for both local (http://localhost:8000) and production domains
- **Data Persistence**: Scores stored in `leaderboard.json` on server
- **Themes**: Controlled via `data-theme` attribute on body element
- **Responsive Mode**: Controlled via `data-mode` attribute (desktop/mobile)

## License

Built for Universitas Bani Saleh - All rights reserved

---

Made with ❤️ for Gen Z students at UBS
