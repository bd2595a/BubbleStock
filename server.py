import flask
try:
	import bloomfuncs
except ImportError:
	pass
try:
	import newsApi
except ImportError:
	print "didn't work!"
	pass

app = flask.Flask(__name__)

@app.route("/")
def root():
	return flask.render_template("index.html")

@app.route("/saywordisdufhisudhfisudhfiu/<word>")
def sayword(word):
	return "You said "+word

@app.route("/query/<ticker>")
def query(ticker):
	# This is where we will access the bloomberg API
	
	try:
		return bloomfuncs.main(ticker)
	except Exception:
		return flask.jsonify(ticker=ticker, info="$MONAYYYY", news = newsApi.processTicker(ticker))

if __name__ == "__main__":
	app.run(debug=True)
