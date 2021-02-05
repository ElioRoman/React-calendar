const baseUrl = 'https://5fedddb29708250017ce3f18.mockapi.io/api/v1/calendar';

export const createEvent = events =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(events),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create event');
    }
  });

export const fetchEvents = () => {
  return fetch(baseUrl)
    .then(res => {
      if (!res.ok) {
        throw new Error('Internal Server Error. Cannot display events');
      }
      return res.json();
    })
    .then(events =>
      events.map(({ _id, dateFrom, dateTo, ...event }) => ({
        id: _id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...event,
      })),
    );
};

export const updateEvent = (id, updatedData) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
};

export const deleteEvent = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to delete task');
    }
  });
};
