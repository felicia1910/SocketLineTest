{
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: [Object], tail: [Object], length: 1 },
      length: 16001,
      pipes: [],
      flowing: null,
      ended: false,
      endEmitted: false,
      reading: false,
      sync: true,
      needReadable: false,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: true,
      autoDestroy: false,
      destroyed: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: true,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: null
    },
    _events: [Object: null prototype] { end: [Function: responseOnEnd] },
    _eventsCount: 1,
    _maxListeners: undefined,
    socket: <ref *1> TLSSocket {
      _tlsOptions: {
        allowHalfOpen: undefined,
        pipe: false,
        secureContext: [SecureContext],
        isServer: false,
        requestCert: true,
        rejectUnauthorized: true,
        session: undefined,
        ALPNProtocols: undefined,
        requestOCSP: undefined,
        enableTrace: undefined,
        pskCallback: undefined,
        highWaterMark: undefined
      },
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      secureConnecting: false,
      _SNICallback: null,
      servername: 'api-data.line.me',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype] {
        close: [Array],
        end: [Array],
        newListener: [Function: keylogNewListener],
        secure: [Function: onConnectSecure],
        session: [Function (anonymous)],
        free: [Function: onFree],
        timeout: [Array],
        agentRemove: [Function: onRemove],
        error: [Function: socketErrorListener],
        data: [Function: socketOnData],
        drain: [Function: ondrain]
      },
      _eventsCount: 11,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'api-data.line.me',
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        destroyed: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: false
      },
      _maxListeners: undefined,
      _writableState: WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        afterWriteTickInfo: null,
        buffered: [],
        bufferedIndex: 0,
        allBuffers: true,
        allNoop: true,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        writable: true
      },
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: TLSWrap {
        _parent: [TCP],
        _parentWrap: undefined,
        _secureContext: [SecureContext],
        reading: true,
        onkeylog: [Function: onkeylog],
        onhandshakestart: [Function: noop],
        onhandshakedone: [Function (anonymous)],
        onocspresponse: [Function: onocspresponse],
        onnewsession: [Function: onnewsessionclient],
        onerror: [Function: onerror],
        [Symbol(owner_symbol)]: [Circular *1]
      },
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: HTTPParser {
        '1': [Function: parserOnHeaders],
        '2': [Function: parserOnHeadersComplete],
        '3': [Function: parserOnBody],
        '4': [Function: parserOnMessageComplete],
        '5': null,
        '6': null,
        _headers: [],
        _url: '',
        socket: [Circular *1],
        incoming: [Circular *2],
        outgoing: [ClientRequest],
        maxHeaderPairs: 2000,
        _consumed: false,
        onIncoming: [Function: parserOnIncomingClient],
        [Symbol(resource_symbol)]: [HTTPClientAsyncResource]
      },
      _httpMessage: ClientRequest {
        _events: [Object: null prototype],
        _eventsCount: 7,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        destroyed: false,
        _last: true,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: false,
        sendDate: false,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: 0,
        _hasBody: true,
        _trailer: '',
        finished: true,
        _headerSent: true,
        socket: [Circular *1],
        _header: 'GET /v2/bot/message/14933365365040/content HTTP/1.1\r\n' +
          'Accept: application/json, text/plain, */*\r\n' +
          'Authorization: Bearer htgAj7q1TMGeyxIzhHw7ExEXT00eg5UuLzHzLiFz+OeeN7U/2+IZtX2i9YFHQcLszMd+Cvmt3r8/1wZTmKznGz5vC54lQU/VT3msf/HZt8dG5Ny3L3dKkR+qE/rsbPGmiMpXB6SpA9sRRCQVVPhFCAdB04t89/1O/w1cDnyilFU=\r\n' +
          'User-Agent: @line/bot-sdk/7.4.0\r\n' +
          'Host: api-data.line.me\r\n' +
          'Connection: close\r\n' +
          '\r\n',
        _keepAliveTimeout: 0,
        _onPendingData: [Function: noopPendingOutput],
        agent: [Agent],
        socketPath: undefined,
        method: 'GET',
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        path: '/v2/bot/message/14933365365040/content',
        _ended: false,
        res: [Circular *2],
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: [HTTPParser],
        maxHeadersCount: null,
        reusedSocket: false,
        host: 'api-data.line.me',
        protocol: 'https:',
        _redirectable: [Writable],
        [Symbol(kCapture)]: false,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kOutHeaders)]: [Object: null prototype]
      },
      [Symbol(res)]: TLSWrap {
        _parent: [TCP],
        _parentWrap: undefined,
        _secureContext: [SecureContext],
        reading: true,
        onkeylog: [Function: onkeylog],
        onhandshakestart: [Function: noop],
        onhandshakedone: [Function (anonymous)],
        onocspresponse: [Function: onocspresponse],
        onnewsession: [Function: onnewsessionclient],
        onerror: [Function: onerror],
        [Symbol(owner_symbol)]: [Circular *1]
      },
      [Symbol(verified)]: true,
      [Symbol(pendingSession)]: null,
      [Symbol(async_id_symbol)]: 118,
      [Symbol(kHandle)]: TLSWrap {
        _parent: [TCP],
        _parentWrap: undefined,
        _secureContext: [SecureContext],
        reading: true,
        onkeylog: [Function: onkeylog],
        onhandshakestart: [Function: noop],
        onhandshakedone: [Function (anonymous)],
        onocspresponse: [Function: onocspresponse],
        onnewsession: [Function: onnewsessionclient],
        onerror: [Function: onerror],
        [Symbol(owner_symbol)]: [Circular *1]
      },
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(connect-options)]: {
        rejectUnauthorized: true,
        ciphers: 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
        checkServerIdentity: [Function: checkServerIdentity],
        minDHSize: 1024,
        maxRedirects: 21,
        maxBodyLength: 10485760,
        protocol: 'https:',
        path: null,
        method: 'GET',
        headers: [Object],
        agent: undefined,
        agents: [Object],
        auth: undefined,
        hostname: 'api-data.line.me',
        port: 443,
        nativeProtocols: [Object],
        pathname: '/v2/bot/message/14933365365040/content',
        _defaultAgent: [Agent],
        host: 'api-data.line.me',
        servername: 'api-data.line.me',
        _agentKey: 'api-data.line.me:443::::::::::::::::::',
        encoding: null,
        singleUse: true
      },
      [Symbol(RequestTimeout)]: undefined
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: false,
    headers: {
      server: 'openresty',
      date: 'Mon, 18 Oct 2021 07:41:52 GMT',
      'content-type': 'image/jpeg',
      'content-length': '135292',
      connection: 'close',
      'x-line-request-id': 'f8e66a50-ce23-4925-b198-10b1e33af9ae',
      'x-content-type-options': 'nosniff',
      'x-xss-protection': '1; mode=block',
      'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
      pragma: 'no-cache',
      expires: '0',
      'x-frame-options': 'DENY'
    },
    rawHeaders: [
      'Server',
      'openresty',
      'Date',
      'Mon, 18 Oct 2021 07:41:52 GMT',
      'Content-Type',
      'image/jpeg',
      'Content-Length',
      '135292',
      'Connection',
      'close',
      'x-line-request-id',
      'f8e66a50-ce23-4925-b198-10b1e33af9ae',
      'x-content-type-options',
      'nosniff',
      'x-xss-protection',
      '1; mode=block',
      'cache-control',
      'no-cache, no-store, max-age=0, must-revalidate',
      'pragma',
      'no-cache',
      'expires',
      '0',
      'x-frame-options',
      'DENY'
    ],
    trailers: {},
    rawTrailers: [],
    aborted: false,
    upgrade: false,
    url: '',
    method: null,
    statusCode: 200,
    statusMessage: 'OK',
    client: <ref *1> TLSSocket {
      _tlsOptions: {
        allowHalfOpen: undefined,
        pipe: false,
        secureContext: [SecureContext],
        isServer: false,
        requestCert: true,
        rejectUnauthorized: true,
        session: undefined,
        ALPNProtocols: undefined,
        requestOCSP: undefined,
        enableTrace: undefined,
        pskCallback: undefined,
        highWaterMark: undefined
      },
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      secureConnecting: false,
      _SNICallback: null,
      servername: 'api-data.line.me',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype] {
        close: [Array],
        end: [Array],
        newListener: [Function: keylogNewListener],
        secure: [Function: onConnectSecure],
        session: [Function (anonymous)],
        free: [Function: onFree],
        timeout: [Array],
        agentRemove: [Function: onRemove],
        error: [Function: socketErrorListener],
        data: [Function: socketOnData],
        drain: [Function: ondrain]
      },
      _eventsCount: 11,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'api-data.line.me',
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        destroyed: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: false
      },
      _maxListeners: undefined,
      _writableState: WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        afterWriteTickInfo: null,
        buffered: [],
        bufferedIndex: 0,
        allBuffers: true,
        allNoop: true,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        writable: true
      },
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: TLSWrap {
        _parent: [TCP],
        _parentWrap: undefined,
        _secureContext: [SecureContext],
        reading: true,
        onkeylog: [Function: onkeylog],
        onhandshakestart: [Function: noop],
        onhandshakedone: [Function (anonymous)],
        onocspresponse: [Function: onocspresponse],
        onnewsession: [Function: onnewsessionclient],
        onerror: [Function: onerror],
        [Symbol(owner_symbol)]: [Circular *1]
      },
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: HTTPParser {
        '1': [Function: parserOnHeaders],
        '2': [Function: parserOnHeadersComplete],
        '3': [Function: parserOnBody],
        '4': [Function: parserOnMessageComplete],
        '5': null,
        '6': null,
        _headers: [],
        _url: '',
        socket: [Circular *1],
        incoming: [Circular *2],
        outgoing: [ClientRequest],
        maxHeaderPairs: 2000,
        _consumed: false,
        onIncoming: [Function: parserOnIncomingClient],
        [Symbol(resource_symbol)]: [HTTPClientAsyncResource]
      },
      _httpMessage: ClientRequest {
        _events: [Object: null prototype],
        _eventsCount: 7,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        destroyed: false,
        _last: true,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: false,
        sendDate: false,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: 0,
        _hasBody: true,
        _trailer: '',
        finished: true,
        _headerSent: true,
        socket: [Circular *1],
        _header: 'GET /v2/bot/message/14933365365040/content HTTP/1.1\r\n' +
          'Accept: application/json, text/plain, */*\r\n' +
          'Authorization: Bearer htgAj7q1TMGeyxIzhHw7ExEXT00eg5UuLzHzLiFz+OeeN7U/2+IZtX2i9YFHQcLszMd+Cvmt3r8/1wZTmKznGz5vC54lQU/VT3msf/HZt8dG5Ny3L3dKkR+qE/rsbPGmiMpXB6SpA9sRRCQVVPhFCAdB04t89/1O/w1cDnyilFU=\r\n' +
          'User-Agent: @line/bot-sdk/7.4.0\r\n' +
          'Host: api-data.line.me\r\n' +
          'Connection: close\r\n' +
          '\r\n',
        _keepAliveTimeout: 0,
        _onPendingData: [Function: noopPendingOutput],
        agent: [Agent],
        socketPath: undefined,
        method: 'GET',
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        path: '/v2/bot/message/14933365365040/content',
        _ended: false,
        res: [Circular *2],
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: [HTTPParser],
        maxHeadersCount: null,
        reusedSocket: false,
        host: 'api-data.line.me',
        protocol: 'https:',
        _redirectable: [Writable],
        [Symbol(kCapture)]: false,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kOutHeaders)]: [Object: null prototype]
      },
      [Symbol(res)]: TLSWrap {
        _parent: [TCP],
        _parentWrap: undefined,
        _secureContext: [SecureContext],
        reading: true,
        onkeylog: [Function: onkeylog],
        onhandshakestart: [Function: noop],
        onhandshakedone: [Function (anonymous)],
        onocspresponse: [Function: onocspresponse],
        onnewsession: [Function: onnewsessionclient],
        onerror: [Function: onerror],
        [Symbol(owner_symbol)]: [Circular *1]
      },
      [Symbol(verified)]: true,
      [Symbol(pendingSession)]: null,
      [Symbol(async_id_symbol)]: 118,
      [Symbol(kHandle)]: TLSWrap {
        _parent: [TCP],
        _parentWrap: undefined,
        _secureContext: [SecureContext],
        reading: true,
        onkeylog: [Function: onkeylog],
        onhandshakestart: [Function: noop],
        onhandshakedone: [Function (anonymous)],
        onocspresponse: [Function: onocspresponse],
        onnewsession: [Function: onnewsessionclient],
        onerror: [Function: onerror],
        [Symbol(owner_symbol)]: [Circular *1]
      },
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(connect-options)]: {
        rejectUnauthorized: true,
        ciphers: 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
        checkServerIdentity: [Function: checkServerIdentity],
        minDHSize: 1024,
        maxRedirects: 21,
        maxBodyLength: 10485760,
        protocol: 'https:',
        path: null,
        method: 'GET',
        headers: [Object],
        agent: undefined,
        agents: [Object],
        auth: undefined,
        hostname: 'api-data.line.me',
        port: 443,
        nativeProtocols: [Object],
        pathname: '/v2/bot/message/14933365365040/content',
        _defaultAgent: [Agent],
        host: 'api-data.line.me',
        servername: 'api-data.line.me',
        _agentKey: 'api-data.line.me:443::::::::::::::::::',
        encoding: null,
        singleUse: true
      },
      [Symbol(RequestTimeout)]: undefined
    },
    _consuming: false,
    _dumped: false,
    req: <ref *3> ClientRequest {
      _events: [Object: null prototype] {
        socket: [Function (anonymous)],
        abort: [Function (anonymous)],
        aborted: [Function (anonymous)],
        connect: [Function (anonymous)],
        error: [Function (anonymous)],
        timeout: [Function (anonymous)],
        prefinish: [Function: requestOnPrefinish]
      },
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      socket: <ref *1> TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        secureConnecting: false,
        _SNICallback: null,
        servername: 'api-data.line.me',
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object: null prototype],
        _eventsCount: 11,
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: 'api-data.line.me',
        _readableState: [ReadableState],
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: [TLSWrap],
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: [HTTPParser],
        _httpMessage: [Circular *3],
        [Symbol(res)]: [TLSWrap],
        [Symbol(verified)]: true,
        [Symbol(pendingSession)]: null,
        [Symbol(async_id_symbol)]: 118,
        [Symbol(kHandle)]: [TLSWrap],
        [Symbol(kSetNoDelay)]: false,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(connect-options)]: [Object],
        [Symbol(RequestTimeout)]: undefined
      },
      _header: 'GET /v2/bot/message/14933365365040/content HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'Authorization: Bearer htgAj7q1TMGeyxIzhHw7ExEXT00eg5UuLzHzLiFz+OeeN7U/2+IZtX2i9YFHQcLszMd+Cvmt3r8/1wZTmKznGz5vC54lQU/VT3msf/HZt8dG5Ny3L3dKkR+qE/rsbPGmiMpXB6SpA9sRRCQVVPhFCAdB04t89/1O/w1cDnyilFU=\r\n' +
        'User-Agent: @line/bot-sdk/7.4.0\r\n' +
        'Host: api-data.line.me\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: noopPendingOutput],
      agent: Agent {
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        defaultPort: 443,
        protocol: 'https:',
        options: [Object],
        requests: {},
        sockets: [Object],
        freeSockets: {},
        keepAliveMsecs: 1000,
        keepAlive: false,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        scheduling: 'fifo',
        maxTotalSockets: Infinity,
        totalSocketCount: 1,
        maxCachedSessions: 100,
        _sessionCache: [Object],
        [Symbol(kCapture)]: false
      },
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/v2/bot/message/14933365365040/content',
      _ended: false,
      res: [Circular *2],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: HTTPParser {
        '1': [Function: parserOnHeaders],
        '2': [Function: parserOnHeadersComplete],
        '3': [Function: parserOnBody],
        '4': [Function: parserOnMessageComplete],
        '5': null,
        '6': null,
        _headers: [],
        _url: '',
        socket: [TLSSocket],
        incoming: [Circular *2],
        outgoing: [Circular *3],
        maxHeaderPairs: 2000,
        _consumed: false,
        onIncoming: [Function: parserOnIncomingClient],
        [Symbol(resource_symbol)]: [HTTPClientAsyncResource]
      },
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'api-data.line.me',
      protocol: 'https:',
      _redirectable: Writable {
        _writableState: [WritableState],
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _options: [Object],
        _ended: true,
        _ending: true,
        _redirectCount: 0,
        _redirects: [],
        _requestBodyLength: 0,
        _requestBodyBuffers: [],
        _onNativeResponse: [Function (anonymous)],
        _currentRequest: [Circular *3],
        _currentUrl: 'https://api-data.line.me/v2/bot/message/14933365365040/content',
        [Symbol(kCapture)]: false
      },
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype] {
        accept: [Array],
        authorization: [Array],
        'user-agent': [Array],
        host: [Array]
      }
    },
    responseUrl: 'https://api-data.line.me/v2/bot/message/14933365365040/content',
    redirects: [],
    [Symbol(kCapture)]: false,
    [Symbol(RequestTimeout)]: undefined
  }