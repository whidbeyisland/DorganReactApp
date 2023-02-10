import pytest
import json

from api.api import app as flask_app

@pytest.fixture
def app():
    yield flask_app

@pytest.fixture
def client(app):
    return app.test_client()

def test_index(app, client):
    res = client.get('/2')
    assert res.status_code == 200
    expected = {'2': 2}
    assert expected == json.loads(res.get_data(as_text=True))