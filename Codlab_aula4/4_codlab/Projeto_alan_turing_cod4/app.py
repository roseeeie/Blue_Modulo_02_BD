from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    enigma_resolvido = 1
    
    if enigma_resolvido == 1:
        status = True
    else:
        status = False        
    
    return render_template('index.html',status = status)

if __name__ == ("__main__"):
    app.run(debug=True)
   