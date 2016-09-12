# JSDOM-aXe

A work-in-progress testing demo for JSDOM and the aXe accessibility test engine.

The aXe file in this project is built from [axe-core](https://github.com/dequelabs/axe-core) and copied over manually, as the purpose of this demo is to test and fix library internals.

## Building aXe for this Demo
Build axe-core *in that directory* and copy into this one (path will depend on your machine):
```
grunt build && cp axe.js ../jsdom-axe
```

## Install JSDOM
```
npm install
```

## Run tests

In this repository, run:
```
npm test
```