from flask import Flask, render_template, url_for, request, redirect

app = Flask(__name__)

@app.route("/")
def index():
        if request.method == "POST":
                return redirect(url_for('game'))
        return render_template("index.html")



@app.route('/game', methods=['POST', 'GET'])
def game():
        return render_template("gaaaame.html")

if __name__ == "__main__":
    app.run (debug=True, port=5008)
