
FROM python:3.9-slim


ENV PYTHONUNBUFFERED=1


WORKDIR /app


COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt


COPY . /app/


COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh


CMD ["sh", "/app/entrypoint.sh"]
