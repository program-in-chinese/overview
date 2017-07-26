# -*- coding: utf-8 -*-
# 测试于: ideone.com, perl6
# 本地测试perl v5.12.4: $ perl 斐波那契.pl

use utf8;

sub 斐波那契
{
    my ($rec) = @_;
    return 0 if $rec == 0;
    return 1 if $rec == 1;
    return 斐波那契($rec - 1) + 斐波那契($rec - 2);
}

print &斐波那契(16)