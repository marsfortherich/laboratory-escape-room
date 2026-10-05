"""Tiny client for the Blender MCP add-on socket (localhost:9876): runs Python inside Blender.

    python tools/blender_rpc.py script.py        # executes the file in Blender, prints the result
"""
import json
import socket
import sys


def call(kind, params=None, timeout=900):
    s = socket.create_connection(('127.0.0.1', 9876), timeout=10)
    s.sendall(json.dumps({'type': kind, 'params': params or {}}).encode())
    s.settimeout(timeout)
    data = b''
    while True:
        chunk = s.recv(1 << 20)
        if not chunk:
            break
        data += chunk
        try:
            return json.loads(data)
        except ValueError:
            pass
    return json.loads(data)


def run(code):
    r = call('execute_code', {'code': code})
    return r


if __name__ == '__main__':
    code = open(sys.argv[1], encoding='utf-8').read()
    r = run(code)
    print(json.dumps(r, indent=1)[:6000])
