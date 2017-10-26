# -*- coding: utf-8 -*-
# 测试于: ideone.com, perl6
# 本地测试perl v5.12.4: $ perl 斐波那契.pl

use utf8;

sub 斐波那契
{
    my ($数) = @_;
    return 0 if $数 == 0;
    return 1 if $数 == 1;
    return 斐波那契($数 - 1) + 斐波那契($数 - 2);
}

print &斐波那契(16)