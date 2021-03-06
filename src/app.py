import json
from flask import Flask, jsonify, request
from flask_cors import CORS

from Google import Create_Service
import base64
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)


def sendEmail(to, subject, body):
    CLIENT_SECRET_FILE = 'client_secret.json'
    API_NAME = 'gmail'
    API_VERSION = 'v1'
    SCOPES = ['https://mail.google.com/']

    service = Create_Service(CLIENT_SECRET_FILE, API_NAME, API_VERSION, SCOPES)

    emailMsg = body
    mimeMessage = MIMEMultipart()
    mimeMessage['to'] = to
    # mimeMessage['Cc'] = 'contacto@denegocios.cl'
    mimeMessage['subject'] = subject
    mimeMessage.attach(MIMEText(emailMsg, 'plain'))
    raw_string = base64.urlsafe_b64encode(mimeMessage.as_bytes()).decode()

    message = service.users().messages().send(
        userId='me', body={'raw': raw_string}).execute()
    print(message)


@app.route('/enviarCorreo', methods=['POST'])
def enviar():
    request_body = request.data
    decoded_object = json.loads(request_body)
    to = decoded_object["to"]
    subject = decoded_object["subject"]
    body = decoded_object["body"]

    sendEmail(to, subject, body)

    return jsonify("Prueba Correcta"), 201


if __name__ == '__main__':
    app.run()
