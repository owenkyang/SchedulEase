import express from "express";
const notFound = (req, res) => {
    res.status(404).send("Route not found");
}
export default notFound