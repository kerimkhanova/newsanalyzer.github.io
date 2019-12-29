import "./style/about.css";

import { ApiCommit } from "./script/apiCommit/apiCommit.js";

const getCommits = new ApiCommit('https://api.github.com/repos/kerimkhanova/newsanalyzer.github.io/commits');

getCommits.getInfoCommit();