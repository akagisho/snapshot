# Snapshot

## Setp.1

```
$ sudo apt update
$ sudo apt install supervisor nodejs
```

## Step.2

```
$ sudo useradd -m -d /home/node -s /bin/bash node
$ sudo su - node
node $ git clone https://github.com/egohaguf/snapshot.git
node $ cd snapshot
node $ npm install
```

## Step.3

```
node $ DEBUG=snapshot:* npm start
```
## Usage

```
$ curl http://localhost:3000/screenshot?url=https://example.jp
```
