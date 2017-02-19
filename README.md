# Snapshot

## Setp.1

```
$ sudo apt update
$ sudo apt install curl git libfontconfig-dev fonts-takao* supervisor
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt install nodejs
$ curl -OL https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
$ tar -xfv phantomjs-2.1.1-linux-x86_64.tar.bz2
$ sudo cp phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/
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
$ curl -XPOST --data "target=https://example.jp" https://example.jp:3000/
```
