package com.baotangbacninh.baotang.security;

import com.baotangbacninh.baotang.model.Account;
import com.baotangbacninh.baotang.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailService implements UserDetailsService {
    @Autowired
    AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepository.findByAccountName(username);
        if(account == null){
            throw  new UsernameNotFoundException("sai tk hoac mk");
        }
        return new CustomUserDetail(account);
    }
}
