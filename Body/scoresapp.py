from flask import Flask,render_template
app=Flask(__name__,template_folder="Body")
@app.route("/")
def score():
    return "Excellent Work"
if __name__ == '__main__':
    app.run(debug=True)