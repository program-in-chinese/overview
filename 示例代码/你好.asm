; win64下测试, fasm 1.71.60：
; > fasm 你好.asm 你好.exe
; > 你好.exe

format PE64 GUI

entry 开始
section '.text' code readable executable

开始:
    push rbp
    mov rbp, rsp

    xor rcx, rcx
    lea rdx, [szText]
    lea r8, [szCaption]
    xor r9d, r9d
    call [MessageBoxA]

    leave
    ret

section '.idata' import data readable
dd 0, 0, 0, RVA user32库, RVA 用户表
dd 0, 0, 0, 0, 0

用户表:
    MessageBoxA dq RVA _MessageBoxA
    dq 0

user32库 db 'USER32.DLL', 0

_MessageBoxA dw 0
db 'MessageBoxA', 0

section '.rdata' data readable
szText db 'No?', 0
szCaption db 'Yes!', 0
