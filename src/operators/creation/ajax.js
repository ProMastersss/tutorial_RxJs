import { ajax } from "rxjs/ajax";
import { description, output, title } from "../../App";

title("ajax");

description(`Делает ajax запрос`);

const githubUsers = `https://api.github.com/users?per_page=2`;

const users = ajax.getJSON(githubUsers);

const subscribe = users.subscribe(
  (res) => output(JSON.stringify(res)),
  (err) => output(JSON.stringify(err))
);
