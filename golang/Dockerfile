FROM golang:1.14.4-alpine

WORKDIR /go/src/app

COPY . .

WORKDIR ./katas

RUN go build -o main .

RUN adduser -S -D -H -h . appuser

USER appuser

CMD ["./main"]