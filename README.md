# Задание
Информация по заданию содержится в папке `task/`

# Установка
```bash
# backend
cd interview
python -m venv venv  # python >= 3.7
source venv/bin/activate
pip install -r backend/requirements.txt

cd interview/backend
python manage.py migrate
python manage.py loaddata */fixtures/*.json  # test data
python manage.py createsuperuser
python manage.py runserver

# frontend
cd interview/frontend
npm install
npm run serve
```

# production
```
npm run build
python manage.py runserver
```
