
import flask

app = flask.Flask(__name__)

@app.route("/")
def root():
	return flask.render_template("index.html")

@app.route("/saywordisdufhisudhfisudhfiu/<word>")
def sayword(word):
	return "You said "+word

if __name__ == "__main__":
	app.run(debug=True)