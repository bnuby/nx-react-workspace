import { JsonPipe } from '../utils/fetch-util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let process: any;

const host = process.env.NX_HOST;

const JSONHeader = {
  'Content-type': 'application/json; charset=UTF-8',
};

const fetchPlaceholder = (id: number) =>
  fetch(`${host}/posts/${id}`).then(JsonPipe);
const fetchPlaceholders = () => fetch(`${host}/posts`).then(JsonPipe);
const createPlaceholder = (body: Record<string, any>) =>
  fetch(`${host}/posts`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: JSONHeader,
  }).then(JsonPipe);
const updatePlaceholder = (id: number, body: Record<string, any>) =>
  fetch(`${host}/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: JSONHeader,
  }).then(JsonPipe);
const updatePartialPlaceholder = (id: number, body: Record<string, any>) =>
  fetch(`${host}/posts/${id}`, {
    method: 'Patch',
    body: JSON.stringify(body),
    headers: JSONHeader,
  }).then(JsonPipe);
const fetchPlaceholderComments = (id: string) =>
  fetch(`${host}/posts/${id}/comments`).then(JsonPipe);

const deletePlaceholder = (id: number) =>
  fetch(`${host}/posts/${id}`, {
    method: 'DELETE',
    headers: JSONHeader,
  }).then(JsonPipe);

export {
  fetchPlaceholder,
  fetchPlaceholders,
  createPlaceholder,
  updatePlaceholder,
  updatePartialPlaceholder,
  fetchPlaceholderComments,
  deletePlaceholder,
};
