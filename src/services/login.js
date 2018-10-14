import React from 'react';
import axios from 'axios';

export function auth(credentials) {
    return axios
        .post("/login", { credentials })
        .then(res => res.data)
}