import React from "react"
import Head from "../components/head"
/** @jsx jsx */
import { css, keyframes, jsx } from "@emotion/core"
import "../styles/reset.css"

const text = ["H", "e", "l", "l", "o", ",", "W", "o", "r", "l", "d"]

// Styles

const bgTopToDowm = keyframes({
  "0%": {
    transformOrigin: "left bottom",
    transform: "scale(1, 1)",
  },
  "25%": {
    transformOrigin: "left bottom",
    transform: "scale(1, 1)",
  },
  "30%": {
    transformOrigin: "left bottom",
    transform: "scale(1, 0)",
  },
  "80%": {
    transformOrigin: "right top",
    transform: "scale(1, 0)",
  },
  "90%": {
    transformOrigin: "right top",
    transform: "scale(1, 1)",
  },
  "100%": {
    transformOrigin: "right top",
    transform: "scale(1, 1)",
  },
})

const container = css({
  height: "100%",
  width: "100%",
})

const mainText = css({
  textAlign: "center",
  paddingTop: "40vh",
  fontSize: "8rem",
  color: "#333",
})

const wordStyleBase = css({
  position: "relative",
  "::before": {
    content: "''",
    background: "#000",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    animationName: bgTopToDowm,
    animationDuration: "10s",
    animationIterationCount: "infinite",
  },
})

const Home = () => (
  <div>
    <Head title="Home" />
    <div css={container}>
      <p css={mainText}>
        {text.map((word, index) => {
          const wordStyle = css(wordStyleBase, {
            "::before": {
              animationDelay: `${2 + (index + 1) / 3}s`,
            },
          })
          return (
            <span key={index} css={wordStyle}>
              {word}
            </span>
          )
        })}
      </p>
    </div>
  </div>
)

export default Home
