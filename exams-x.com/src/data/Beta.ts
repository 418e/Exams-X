"use client";

import features from "./features.json";

// check if feature is beta
function isBeta(feature: string) {
  const Status: boolean[] = [];
  features.Beta.map((f: string) => {
    if (f == feature) {
      Status.push(true);
    }
  });
  return Status[0] || false;
}

// activate features for beta users
function activateBeta(feature: string) {
  const isBeta = JSON.parse(localStorage.getItem("isbeta") || "false");
  const activeBeta = [...JSON.parse(localStorage.getItem("betas") || "[]")];

  if (isBeta) {
    activeBeta.push(feature);
  } else {
    activeBeta.map((f: string) => {
      if (f == feature) {
        activeBeta.slice(activeBeta.indexOf(f), activeBeta.indexOf(f) + 1);
      }
    });
  }

  localStorage.setItem("betas", JSON.stringify(activeBeta));
}
