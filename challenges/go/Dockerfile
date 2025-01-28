FROM golang:1.23-alpine AS golang

WORKDIR /app
COPY . .

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags '-s -w' -o /main .

FROM scratch

COPY --from=golang /main .

CMD [ "/main" ]
