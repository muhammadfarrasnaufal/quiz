from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

LEADERBOARD_FILE = os.path.join(os.path.dirname(__file__), 'leaderboard.json')

def load_leaderboard():
    """Load leaderboard from JSON file"""
    if not os.path.exists(LEADERBOARD_FILE):
        return []
    try:
        with open(LEADERBOARD_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except:
        return []

def save_leaderboard(data):
    """Save leaderboard to JSON file"""
    with open(LEADERBOARD_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    """Get top 5 leaderboard entries"""
    leaderboard = load_leaderboard()
    # Sort by score descending and return top 5
    sorted_board = sorted(leaderboard, key=lambda x: x['score'], reverse=True)[:5]
    return jsonify({
        'success': True,
        'data': sorted_board,
        'total': len(leaderboard)
    })

@app.route('/api/score', methods=['POST'])
def add_score():
    """Add a new score to leaderboard"""
    try:
        data = request.get_json()
        name = data.get('name', 'Anonim').strip()
        score = data.get('score', 0)
        
        if score < 0:
            return jsonify({'success': False, 'error': 'Score must be positive'}), 400
        
        leaderboard = load_leaderboard()
        
        # Add new entry with timestamp
        new_entry = {
            'name': name if name else 'Anonim',
            'score': int(score),
            'timestamp': datetime.now().isoformat()
        }
        
        leaderboard.append(new_entry)
        save_leaderboard(leaderboard)
        
        # Return updated top 5
        sorted_board = sorted(leaderboard, key=lambda x: x['score'], reverse=True)[:5]
        
        return jsonify({
            'success': True,
            'message': f"Skor {name} ({score}) berhasil disimpan!",
            'leaderboard': sorted_board
        }), 201
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

@app.route('/api/leaderboard/reset', methods=['POST'])
def reset_leaderboard():
    """Reset leaderboard (admin only)"""
    save_leaderboard([])
    return jsonify({
        'success': True,
        'message': 'Leaderboard reset successfully'
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'running',
        'message': 'UBS Quiz API is running'
    })

if __name__ == '__main__':
    print("🚀 Starting UBS Quiz Leaderboard Server...")
    print("📍 API running at http://localhost:5000")
    print("🎯 Leaderboard file:", LEADERBOARD_FILE)
    app.run(debug=True, port=5000, use_reloader=False)
